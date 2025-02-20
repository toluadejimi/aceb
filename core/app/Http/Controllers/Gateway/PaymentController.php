<?php

namespace App\Http\Controllers\Gateway;

use App\Constants\Status;
use App\Http\Controllers\Controller;
use App\Lib\FormProcessor;
use App\Models\AdminNotification;
use App\Models\Deposit;
use App\Models\GatewayCurrency;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PaymentController extends Controller
{
    public function deposit()
    {
        $gatewayCurrency = GatewayCurrency::whereHas('method', function ($gate) {
            $gate->where('status', Status::ENABLE);
        })->with('method')->orderby('method_code')->get();
        $pageTitle = 'Deposit Methods';
        $deposits = auth()->user()->deposits()->searchable(['trx'])->with(['gateway'])->orderBy('id', 'desc')->paginate(getPaginate());
        return view($this->activeTemplate . 'user.payment.deposit', compact('gatewayCurrency', 'pageTitle', 'deposits'));
    }




    public function makemanual(Request $request)
    {
        return view('makemanual');

    }


    public function depositInsert(Request $request)
    {

        if ($request->gateway == "1") {


            $request->validate([
                'amount' => 'required|numeric|gt:0',
            ]);



            if($request->amount < 1000) {
                $notify =  "Amount can not be less than NGN 1,000";
                return back()->with('error', $notify);
            }


            if($request->amount > 100000) {

                $notify =  "Amount can not be more than 100,000";
                return back()->with('error', $notify);

            }



            Deposit::where('user_id', Auth::id())->where('status', 2)->delete() ?? null;


            $key = env('WEBKEY');
            $ref = trx_id();
            $email = Auth::user()->email;

            $url = "https://web.sprintpay.online/pay?amount=$request->amount&key=$key&ref=$ref&email=$email";


            $data = new Deposit();
            $data->user_id = Auth::id();
            $data->method_code = 102;
            $data->method_currency = "NGN";
            $data->amount = $request->amount;
            $data->charge = 0;
            $data->rate = 0;
            $data->final_amo = $request->amount;
            $data->btc_amo = 0;
            $data->btc_wallet = "";
            $data->trx = $ref;
            $data->status = 2;

            $data->save();

            $message = Auth::user()->email . "| wants to fund |  NGN " . number_format($request->amount) . " | with ref | $ref |  on ACEBOOSTSS";
            send_notification_2($message);


            return Redirect::to($url);

        }elseif($request->gateway == "2"){



            $ref = trx_id();
            $data = new Deposit();
            $data->user_id = Auth::id();
            $data->method_code = 1000;
            $data->method_currency = "NGN";
            $data->amount = $request->amount;
            $data->charge = 0;
            $data->rate = 0;
            $data->final_amo = $request->amount;
            $data->btc_amo = 0;
            $data->btc_wallet = "";
            $data->trx = $ref;
            $data->status = 0;
            $data->save();

            $message = Auth::user()->email . "| wants to fund manual |  NGN " . number_format($request->amount) . " | with ref | $ref |  on ACEBOOSTSS";

            send_notification_2($message);

            $amount = $request->amount;


            return view($this->activeTemplate . 'user.makemanual', compact('amount', 'ref'));




        }




    }


        public
        function verify_payment(request $request)
        {

            $trx_id = $request->trans_id;
            $ip = $request->ip();
            $status = $request->status;


            if ($status == 'failed') {

                $message = Auth::user()->email . "| Cancled |  NGN " . number_format($request->amount) . " | with ref | $trx_id |  on ACEBOOSTSS";
                send_notification_2($message);


                Deposit::where('trx', $trx_id)->where('status', 0)->update(['status' => 3]);

                return redirect('user/deposit')->with('error', 'Transaction Declined');
            }


            $trxstatus = Deposit::where('trx', $trx_id)->first()->status ?? null;

            if ($trxstatus == 1) {

                return redirect('user/deposit')->with('error', 'Transaction already confirmed or not found');
            }

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://web.sprintpay.online/api/verify',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => array('trans_id' => "$trx_id"),
            ));

            $var = curl_exec($curl);
            curl_close($curl);
            $var = json_decode($var);

            $status1 = $var->detail ?? null;
            $amount = $var->price ?? null;


            if ($status1 == 'success') {

                $chk_trx = Deposit::where('trx', $trx_id)->first() ?? null;
                if ($chk_trx == null) {
                    return back()->with('error', 'Transaction not processed, Contact Admin');
                }

                Deposit::where('trx', $trx_id)->update(['status' => 1]);
                User::where('id', Auth::id())->increment('balance', $amount);


                $order_id = $trx_id;
                $databody = array('order_id' => "$order_id");

                curl_setopt_array($curl, array(
                    CURLOPT_URL => 'https://web.sprintpay.online/api/resolve-complete',
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => $databody,
                ));

                $var = curl_exec($curl);
                curl_close($curl);
                $var = json_decode($var);


                $message = Auth::user()->email . "| Just funded |  NGN " . number_format($request->amount) . " | with ref | $order_id |  on ACEBOOSTSS";
                send_notification_2($message);


                return redirect('user/deposit')->with('message', "Wallet has been funded with $amount");
            }

            // $message =  Auth::user()->name . "| is trying to fund  with | $request->trx_id  | " . number_format($request->amount, 2) . "\n\n IP ====> " . $request->ip();
            // send_notification($message);

            return redirect('user/deposit')->with('error', 'Transaction already confirmed or not found');
        }


        public
        function appDepositConfirm($hash)
        {
            try {
                $id = decrypt($hash);
            } catch (\Exception $ex) {
                return "Sorry, invalid URL.";
            }

            $data = Deposit::where('id', $id)->where('status', Status::PAYMENT_INITIATE)->orderBy('id', 'DESC')->firstOrFail();
            $user = User::findOrFail($data->user_id);
            auth()->login($user);
            session()->put('Track', $data->trx);
            return to_route('user.deposit.confirm');
        }

        public
        function depositConfirm()
        {
            $track = session()->get('Track');
            $deposit = Deposit::where('trx', $track)->where('status', Status::PAYMENT_INITIATE)->orderBy('id', 'DESC')->with('gateway')->firstOrFail();

            if ($deposit->method_code >= 1000) {
                return to_route('user.deposit.manual.confirm');
            }

            $dirName = $deposit->gateway->alias;
            $new = __NAMESPACE__ . '\\' . $dirName . '\\ProcessController';

            $data = $new::process($deposit);
            $data = json_decode($data);

            if (isset($data->error)) {
                $notify[] = ['error', $data->message];
                return to_route(gatewayRedirectUrl())->withNotify($notify);
            }

            if (isset($data->redirect)) {
                return redirect($data->redirect_url);
            }

            // for Stripe V3
            if (@$data->session) {
                $deposit->btc_wallet = $data->session->id;
                $deposit->save();
            }

            $pageTitle = 'Payment Confirm';
            return view($this->activeTemplate . $data->view, compact('data', 'pageTitle', 'deposit'));
        }

        public
        static function userDataUpdate($deposit, $isManual = null)
        {
            if ($deposit->status == Status::PAYMENT_INITIATE || $deposit->status == Status::PAYMENT_PENDING) {
                $deposit->status = Status::PAYMENT_SUCCESS;
                $deposit->save();

                $user = User::find($deposit->user_id);
                $user->balance += $deposit->amount;
                $user->save();

                $transaction = new Transaction();
                $transaction->user_id = $deposit->user_id;
                $transaction->amount = $deposit->amount;
                $transaction->post_balance = $user->balance;
                $transaction->charge = $deposit->charge;
                $transaction->trx_type = '+';
                $transaction->details = 'Deposit Via ' . "manual";
                $transaction->trx = $deposit->trx;
                $transaction->remark = 'deposit';
                $transaction->save();

                if (!$isManual) {
                    $adminNotification = new AdminNotification();
                    $adminNotification->user_id = $user->id;
                    $adminNotification->title = 'Deposit successful via ' . $deposit->gatewayCurrency()->name;
                    $adminNotification->click_url = urlPath('admin.deposit.successful');
                    $adminNotification->save();
                }

                notify($user, $isManual ? 'DEPOSIT_APPROVE' : 'DEPOSIT_COMPLETE', [
                    'method_name' => "manual",
                    'method_currency' => $deposit->method_currency,
                    'method_amount' => showAmount($deposit->final_amo),
                    'amount' => showAmount($deposit->amount),
                    'charge' => showAmount($deposit->charge),
                    'rate' => showAmount($deposit->rate),
                    'trx' => $deposit->trx,
                    'post_balance' => showAmount($user->balance),
                ]);
            }
        }

        public
        function manualDepositConfirm()
        {
            $track = session()->get('Track');
            $data = Deposit::with('gateway')->where('status', Status::PAYMENT_INITIATE)->where('trx', $track)->first();
            if (!$data) {
                return to_route(gatewayRedirectUrl());
            }

            if ($data->method_code > 999) {

                $pageTitle = 'Deposit Confirm';
                $method = $data->gatewayCurrency();
                $gateway = $method->method;
                return view($this->activeTemplate . 'user.payment.manual', compact('data', 'pageTitle', 'method', 'gateway'));
            }

            abort(404);
        }

    public function manualDepositUpdate(Request $request)
    {


        $file = $request->file('receipt');
        $receipt_fileName = date("ymis") . $file->getClientOriginalName();
        $directory = date("Y")."/".date("m")."/".date("d");
        $path = getFilePath('verify').'/'.$directory;
        $request->receipt->move($path, $receipt_fileName);
        $url = url('')."/".$path."/".$receipt_fileName;




        Deposit::where('trx', $request->ref)->update([
            'status' => 2,
            'url' => $url,
        ]);



        $email = User::where('id', Auth::id())->first()->email;
        $adminNotification = new AdminNotification();
        $adminNotification->user_id = Auth::id();
        $adminNotification->title = 'Payment request from '.Auth::user()->username;
        $adminNotification->click_url = $url;
        $adminNotification->save();



        $message = "Aceboosts |".  $email . "| wants to fund ". number_format($request->amount, 2).  "| check admin to confirm";
        send_notification_2($message);
        send_notification($message);



        $notify = "You have payment request is successful, you will be credited soon";
        return redirect('/user/deposit')->with('message', $notify);




    }

}

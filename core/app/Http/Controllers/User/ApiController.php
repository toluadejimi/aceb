<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    //Api Documentation
    public function api()
    {
        $pageTitle = 'API Documentation';
        return view($this->activeTemplate . 'user.api.index', compact('pageTitle'));
    }

    public function generateApiKey()
    {
        $user          = auth()->user();
        $user->api_key = sha1(time());
        $user->save();
        $notify[] = ['success', 'Generated new api key!'];
        return back()->withNotify($notify);
    }


    public function e_fund(request $request)
    {

        $get_user = User::where('email', $request->email)->first() ?? null;

        if ($get_user == null) {

            return response()->json([
                'status' => false,
                'message' => 'No one user found, please check email and try again',
            ]);
        }


            User::where('email', $request->email)->increment('balance', $request->amount) ?? null;


        $amount = number_format($request->amount, 2);

        Transaction::where('ref_id', $request->order_id)->update(['status' => 2]);


        return response()->json([
            'status' => true,
            'message' => "NGN $amount has been successfully added to your wallet",
        ]);


    }
}

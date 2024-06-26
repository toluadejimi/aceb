<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Models\PasswordReset;
use App\Models\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
     */

    use SendsPasswordResetEmails;

    public function __construct()
    {
        parent::__construct();
        $this->middleware('guest');
    }

    public function showLinkRequestForm()
    {
        $pageTitle = "Account Recovery";
        return view($this->activeTemplate . 'user.auth.passwords.email', compact('pageTitle'));
    }

    public function sendResetCodeEmail(Request $request)
    {
        $request->validate([
            'email' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            $notify =  "Couldn't find any account with this information";
            return back()->with('error',  $notify);
        }

        $code = random_int(00000, 99999);
        $user->update(['ver_code' => $code]);

        $url = url('')."/user/reset-password?code=$code&email=$request->email";
        $data = array(
            'fromsender' => 'noreply@aceboosts.com', 'ACEBOOST',
            'subject' => "Reset Password",
            'toreceiver' => $request->email,
            'first_name' => $user->username,
            'link' => $url,
        );

        Mail::send('emails.pinlink', ["data1" => $data], function ($message) use ($data) {
            $message->from($data['fromsender']);
            $message->to($data['toreceiver']);
            $message->subject($data['subject']);
        });


        $userIpInfo      = getIpInfo();
        $userBrowserInfo = osBrowser();
        notify($user, 'PASS_RESET_CODE', [
            'code'             => $url,
            'operating_system' => @$userBrowserInfo['os_platform'],
            'browser'          => @$userBrowserInfo['browser'],
            'ip'               => @$userIpInfo['ip'],
            'time'             => @$userIpInfo['time'],
        ], ['email']);


        $email = $user->email;
        $notify =  "Password reset email sent successfully";
        return back()->with('message',  $notify);
    }

    public function findFieldType()
    {
        $input = request()->input('value');

        $fieldType = filter_var($input, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        request()->merge([$fieldType => $input]);
        return $fieldType;
    }

    public function codeVerify()
    {
        $pageTitle = 'Verify Email';
        $email     = session()->get('pass_res_mail');

        if (!$email) {
            $notify[] = "Oops! session expired";
            return to_route('user.password.request')->with('error',  $notify);
        }

        return view($this->activeTemplate . 'user.auth.passwords.code_verify', compact('pageTitle', 'email'));
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'code'  => 'required',
            'email' => 'required',
        ]);
        $code = str_replace(' ', '', $request->code);

        if (User::where('ver_code', $code)->where('email', $request->email)->count() != 1) {
            $notify= "Verification code doesn\'t match";
            return to_route('user.password.request')->with('error', $notify);
        }


        $email = $request->email;

        return view($this->activeTemplate . 'user.auth.passwords.reset', compact('email'));


        //return view('user.password.reset', compact('email');
    }
}

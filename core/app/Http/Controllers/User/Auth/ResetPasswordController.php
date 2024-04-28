<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Models\PasswordReset;
use App\Models\User;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;


    public function __construct()
    {
        parent::__construct();
        $this->middleware('guest');
    }

    public function showResetForm(request $request)
    {

        $email = $request->email;
        $code = $request->code;

        return view($this->activeTemplate . 'user.auth.passwords.reset', compact('email', 'code'));



    }

    public function reset(Request $request)
    {



        $request->validate($this->rules(), $this->validationErrorMessages());



        $user = User::where('email', $request->email)->where('ver_code', $request->code)->first() ?? null;

        if(!$user){
            return back()->with('error', "Email or code incorrect");
        }

        $user->password = Hash::make($request->password);
        $user->save();


        $notify = "Password changed successfully";
        return to_route('user.login')->with('message', $notify);
    }



    /**
     * Get the password reset validation rules.
     *
     * @return array
     */
    protected function rules()
    {
        $passwordValidation = Password::min(6);
        $general = gs();
        if ($general->secure_password) {
            $passwordValidation = $passwordValidation->mixedCase()->numbers()->symbols()->uncompromised();
        }
        return [
            'email' => 'required|email',
            'password' => ['required', 'confirmed', $passwordValidation],
        ];
    }
}

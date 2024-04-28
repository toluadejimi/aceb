@extends('layout.front')
@section('content')

    <div class="wrapper-content">
        <div class="wrapper-content__header">
        </div>
        <div class="wrapper-content__body">
            <!-- Main variables *content* -->
            <div id="block_38">
                <div class="block-bg"></div>
                <div class="container">
                    <div class="sign-in">
                        <div class="row sign-up-center-alignment">
                            <div class="col-lg-8">



                                <div class="d-flex justify-content-center mt-4">
                                    <h1> Sign up to get started</h1>
                                </div>
                                <div class="d-flex justify-content-center mt-2 mb-5">
                                    <p style="font-size: 17px; margin-top: 10px">&nbsp;Choose a username and quickly set up your account with your email&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>


                                @if ($errors->any())
                                    <div class="alert alert-danger mb-3">
                                        <ul>
                                            @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                @if (session()->has('message'))
                                    <div class="alert alert-success mb-3">
                                        {{ session()->get('message') }}
                                    </div>
                                @endif
                                @if (session()->has('error'))
                                    <div class="alert alert-danger mb-3">
                                        {{ session()->get('error') }}
                                    </div>
                                @endif






                                <div class="component_card">
                                    <div class="card2">
                                        <form action="{{ route('user.register') }}" method="POST">
                                            @csrf
                                            <div>
                                                <div class="component_form_group">
                                                    <div class="">
                                                        <div class="form-group">
                                                            <label for="login" class="control-label">Username</label>
                                                            <input type="text" class="form-control" id="login"
                                                                   name="username"
                                                                   value="{{ old('username') }}">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="component_form_group">
                                                    <div class="">
                                                        <div class="form-group">
                                                            <label for="email" class="control-label">Email</label>
                                                            <input type="email" class="form-control" name="email"
                                                                   value="{{ old('email') }}" required>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="component_form_group">
                                                    <div class="">
                                                        <div class="form-group">
                                                            <label for="password" class="control-label">Password</label>
                                                            <input type="password" class="form-control" id="password"
                                                                   value="" name="password" required>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="component_form_group">
                                                    <div class="">
                                                        <div class="form-group">
                                                            <label for="password_again" class="control-label">Confirm
                                                                password</label>
                                                            <input type="password" class="form-control"
                                                                   id="password_again" value=""
                                                                   name="password_confirmation" required">
                                                        </div>
                                                    </div>
                                                </div>


                                                @if ($general->agree)
                                                <div class="">
                                                    <div class="signup-checkbox">
                                                        <div class="component_checkbox">
                                                            <div class="">
                                                                <div class="form-group__checkbox">
                                                                    <label class="form-group__checkbox-label">
                                                                        <input type="checkbox"
                                                                               name="agree"
                                                                               value="1" id="terms">
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                    <label class="form-group__label-title" for="terms">I
                                                                        have read and agreed with<a href="#"
                                                                                                    target="_blank"
                                                                                                    class="sign-up-center-terms-link">Terms
                                                                            of Service</a></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endif
                                            </div>

                                            <input type="hidden" name="_csrf"
                                                   value="4SdWQpDVxxlJXfU2dwC_0ywAb2XNxCtfXbK-1HU_WQy3YjELyZmDIQMKol8Ha_PlTzk_M4SWUTEpwfCyAlcOfQ==">
                                            <div class="component_button_submit">
                                                <div class="form-group">
                                                    <div class="">
                                                        <button type="submit" class="btn btn-block btn-big-primary">Sign
                                                            up
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">Already have an account?<a href="/user/login"
                                                                                                class="sign-up-center-signin-link">Sign
                                                    in</a></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection

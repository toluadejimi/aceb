<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
    <!-- Title -->
    <title>Aceboost | Register</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="AceBoost">
    <meta name="robots" content="">
    <meta name="csrf-token" content="FefTGetU1RFbLEkeFzaTmhDS3ELvrQmLuUYPdybs">
    <meta name="keywords"
          content="bootstrap, courses, education admin template, educational, instructors, learning, learning admin, learning admin theme, learning application, lessons, lms admin template, lms rails, quizzes ui, school admin">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Some description for the page">
    <meta property="og:title" content="Social Media Boost">
    <meta property="og:description" content="Aceboost | Register">
    <meta name="format-detection" content="telephone=no">

    <!-- Mobile Specific -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Favicons Icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{url('')}}/assets/dash/images/favicon.png">

    <link
        href="{{url('')}}/assets/dash/vendor/bootstrap-select/dist/{{url('')}}/assets/dash/css/bootstrap-select.min.css"
        rel="stylesheet">
    <link href="{{url('')}}/assets/dash/css/style.css" rel="stylesheet">

</head>


<body class="vh-100" style="background-image:url('{{url('')}}/assets/dash/images/bg.png'); background-position:center;">
<div class="h-100">
    <div class="container h-100">





        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
                <div class="authincation-content">
                    <div class="row no-gutters">
                        <div class="col-xl-12">
                            <div class="auth-form">
                                <div class="text-center mb-3">
                                    <a href="/"><img src="{{url('')}}/assets/home/img/logo.svg"
                                                              alt=""></a>
                                </div>
                                <h4 class="text-center mb-4">Sign up your account</h4>

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

                                <form action="{{ route('user.register') }}" method="POST">
                                    @csrf

                                    <div class="form-group mb-4">
                                        <label class="form-label" for="username">Username</label>
                                        <input type="text" class="form-control" name="username"
                                               value="{{ old('username') }}" required
                                               placeholder="@lang('Enter Username')">
                                        <small class="text--danger usernameExist"></small>
                                    </div>


                                    <div class="mb-sm-4 mb-3 position-relative">
                                        <label class="form-label" for="email-address">Email Address</label>
                                        <input type="email" class="form-control" placeholder="@lang('Your Email')"
                                               name="email" value="{{ old('email') }}" required>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" class="form-control" name="password"
                                               placeholder="@lang('Password')" required>
                                        @if ($general->secure_password)
                                            <div class="input-popup">
                                                <p class="error lower">@lang('1 small letter minimum')</p>
                                                <p class="error capital">@lang('1 capital letter minimum')</p>
                                                <p class="error number">@lang('1 number minimum')</p>
                                                <p class="error special">@lang('1 special character minimum')</p>
                                                <p class="error minimum">@lang('6 character password')</p>
                                            </div>
                                        @endif
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="form-label" for="password">Confirm Password</label>
                                        <input type="password" class="form-control form--control"
                                               name="password_confirmation" required
                                               placeholder="@lang('Confirm Password')">
                                    </div>


                                    @if ($general->agree)
                                        <div class="form-group form-checkbox my-3 text-center">
                                            <input type="checkbox" id="agree" @checked(old('agree')) name="agree"
                                                   required>
                                            <label for="agree">@lang('I agree with')</label>
                                            <span class="text--base">
                                            <a href="{{url('')}}/policy/privacy-and-policy/93">Policy</a>
                                        </span>
                                        </div>
                                    @endif


                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary btn-block">Register</button>
                                    </div>

                                </form>


                                <div class="new-account mt-3 d-flex justify-content-center">
                                    <p>Already have an account? <a class="text-primary" href="/user/login">Sign
                                            in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Required vendors -->
<script src="{{url('')}}/assets/dash/vendor/global/global.min.js" type="text/javascript"></script>
<script src="{{url('')}}/assets/dash/vendor/bootstrap-select/dist/{{url('')}}/assets/dash/js/bootstrap-select.min.js"
        type="text/javascript"></script>
<script src="{{url('')}}/assets/dash/js/custom.min.js" type="text/javascript"></script>
<script src="{{url('')}}/assets/dash/js/deznav-init.js" type="text/javascript"></script>
<script src="{{url('')}}/assets/dash/js/demo.js" type="text/javascript"></script>


</body>
</html>



<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
    <!-- Title -->
    <title>ACEBOOSTS | Register</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="ACEBOOSTS">
    <meta name="robots" content="">
    <meta name="csrf-token" content="FefTGetU1RFbLEkeFzaTmhDS3ELvrQmLuUYPdybs">
    <meta name="keywords"
          content="bootstrap, courses, education admin template, educational, instructors, learning, learning admin, learning admin theme, learning application, lessons, lms admin template, lms rails, quizzes ui, school admin">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Some description for the page">
    <meta property="og:title" content="Social Media Boost">
    <meta property="og:description" content="ACEBOOSTS | Register">
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

                                <h4 class="text-center mb-4">Sign in your account</h4>
                                <form class="create-account-form register-form verify-gcaptcha" method="POST"
                                      action="{{ route('user.login') }}">
                                    @csrf


                                    <div class="form-group mb-4">
                                        <label class="form-label" for="username">Username or Email</label>
                                        <input type="text" class="form-control" placeholder="Enter username" id="username"
                                               value="{{ old('username') }}" name="username"
                                               placeholder="@lang('Username or Email')" required>
                                    </div>
                                    <div class="mb-sm-4 mb-3 position-relative">
                                        <label class="form-label" for="dlab-password">Password</label>
                                        <input type="password" id="dlab-password" class="form-control" name="password"
                                               required autocomplete="current-password" placeholder="@lang('Password')">
                                        <span class="show-pass eye">
                                    </span>
                                    </div>
                                    <div class="form-row d-flex flex-wrap justify-content-between mb-2">
                                        <div class="form-group mb-sm-4 mb-1">
                                            <div class="form-check custom-checkbox ms-1">
                                                <input type="checkbox" class="form-check-input" id="basic_checkbox_1"
                                                       name="remember" id="remember"
                                                    {{ old('remember') ? 'checked' : '' }}>
                                                <label class="form-check-label" for="basic_checkbox_1">Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group ms-2">
                                            <a href="{{ route('user.password.request') }}">@lang('Forgot Password?')</a>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                    </div>

                                </form>
                                <div class="new-account mt-3 d-flex justify-content-center">
                                    <p>Don't have an account? <a class="text-primary" href="/user/register">Sign up</a></p>
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






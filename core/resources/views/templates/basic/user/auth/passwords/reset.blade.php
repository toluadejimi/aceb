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
                        <div class="col-xl-12 p-3">
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

                            <div class="card-body p-3">

                                <div class="col-md-12">
                                    <div class="common-form-style bg-one">
                                        <div class="mb-4">
                                            <h4>@lang('Your account is verified successfully. Now you can change your password. Please enter a strong password and don\'t share it with anyone.')</h4>
                                        </div>
                                        <form method="POST" action="{{ route('user.password.update') }}">
                                            @csrf
                                            <input type="hidden" name="email" value="{{ $email }}">
                                            <div class="form-group mb-3">
                                                <label class="form-label">@lang('Password')</label>
                                                <input type="password" class="form-control form--control" name="password"
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
                                            <div class="form-group mb-3">
                                                <label class="form-label">@lang('Confirm Password')</label>
                                                <input type="password" class="form-control form--control" placeholder="@lang('Confirm Password')"
                                                       name="password_confirmation" required>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-primary w-100"> @lang('Submit')</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

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





@if ($general->secure_password)
    @push('script-lib')
        <script src="{{ asset('assets/global/js/secure_password.js') }}"></script>
    @endpush
@endif



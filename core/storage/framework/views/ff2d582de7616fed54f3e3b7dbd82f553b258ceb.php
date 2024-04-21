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
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(url('')); ?>/assets/dash/images/favicon.png">

    <link
        href="<?php echo e(url('')); ?>/assets/dash/vendor/bootstrap-select/dist/<?php echo e(url('')); ?>/assets/dash/css/bootstrap-select.min.css"
        rel="stylesheet">
    <link href="<?php echo e(url('')); ?>/assets/dash/css/style.css" rel="stylesheet">

</head>


<body class="vh-100" style="background-image:url('<?php echo e(url('')); ?>/assets/dash/images/bg.png'); background-position:center;">
<div class="h-100">
    <div class="container h-100">





        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
                <div class="authincation-content">
                    <div class="row no-gutters">
                        <div class="col-xl-12">
                            <div class="auth-form">
                                <div class="text-center mb-3">
                                    <a href="/"><img src="<?php echo e(url('')); ?>/assets/home/img/logo.svg"
                                                     alt=""></a>
                                </div>

                                <?php if($errors->any()): ?>
                                    <div class="alert alert-danger mb-3">
                                        <ul>
                                            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <li><?php echo e($error); ?></li>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </ul>
                                    </div>
                                <?php endif; ?>
                                <?php if(session()->has('message')): ?>
                                    <div class="alert alert-success mb-3">
                                        <?php echo e(session()->get('message')); ?>

                                    </div>
                                <?php endif; ?>
                                <?php if(session()->has('error')): ?>
                                    <div class="alert alert-danger mb-3">
                                        <?php echo e(session()->get('error')); ?>

                                    </div>
                                <?php endif; ?>

                                <h4 class="text-center mb-4">Sign in your account</h4>
                                <form class="create-account-form register-form verify-gcaptcha" method="POST"
                                      action="<?php echo e(route('user.login')); ?>">
                                    <?php echo csrf_field(); ?>


                                    <div class="form-group mb-4">
                                        <label class="form-label" for="username">Username or Email</label>
                                        <input type="text" class="form-control" placeholder="Enter username" id="username"
                                               value="<?php echo e(old('username')); ?>" name="username"
                                               placeholder="<?php echo app('translator')->get('Username or Email'); ?>" required>
                                    </div>
                                    <div class="mb-sm-4 mb-3 position-relative">
                                        <label class="form-label" for="dlab-password">Password</label>
                                        <input type="password" id="dlab-password" class="form-control" name="password"
                                               required autocomplete="current-password" placeholder="<?php echo app('translator')->get('Password'); ?>">
                                        <span class="show-pass eye">
                                    </span>
                                    </div>
                                    <div class="form-row d-flex flex-wrap justify-content-between mb-2">
                                        <div class="form-group mb-sm-4 mb-1">
                                            <div class="form-check custom-checkbox ms-1">
                                                <input type="checkbox" class="form-check-input" id="basic_checkbox_1"
                                                       name="remember" id="remember"
                                                    <?php echo e(old('remember') ? 'checked' : ''); ?>>
                                                <label class="form-check-label" for="basic_checkbox_1">Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group ms-2">
                                            <a href="<?php echo e(route('user.password.request')); ?>"><?php echo app('translator')->get('Forgot Password?'); ?></a>
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
<script src="<?php echo e(url('')); ?>/assets/dash/vendor/global/global.min.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/vendor/bootstrap-select/dist/<?php echo e(url('')); ?>/assets/dash/js/bootstrap-select.min.js"
        type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/custom.min.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/deznav-init.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/demo.js" type="text/javascript"></script>


</body>
</html>





<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/auth/login.blade.php ENDPATH**/ ?>
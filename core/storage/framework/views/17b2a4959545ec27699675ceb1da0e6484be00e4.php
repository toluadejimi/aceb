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
                                <h4 class="text-center mb-4">Sign up your account</h4>

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

                                <form action="<?php echo e(route('user.register')); ?>" method="POST">
                                    <?php echo csrf_field(); ?>

                                    <div class="form-group mb-4">
                                        <label class="form-label" for="username">Username</label>
                                        <input type="text" class="form-control" name="username"
                                               value="<?php echo e(old('username')); ?>" required
                                               placeholder="<?php echo app('translator')->get('Enter Username'); ?>">
                                        <small class="text--danger usernameExist"></small>
                                    </div>


                                    <div class="mb-sm-4 mb-3 position-relative">
                                        <label class="form-label" for="email-address">Email Address</label>
                                        <input type="email" class="form-control" placeholder="<?php echo app('translator')->get('Your Email'); ?>"
                                               name="email" value="<?php echo e(old('email')); ?>" required>
                                    </div>


                                    <div class="form-group mb-4">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" class="form-control" name="password"
                                               placeholder="<?php echo app('translator')->get('Password'); ?>" required>
                                        <?php if($general->secure_password): ?>
                                            <div class="input-popup">
                                                <p class="error lower"><?php echo app('translator')->get('1 small letter minimum'); ?></p>
                                                <p class="error capital"><?php echo app('translator')->get('1 capital letter minimum'); ?></p>
                                                <p class="error number"><?php echo app('translator')->get('1 number minimum'); ?></p>
                                                <p class="error special"><?php echo app('translator')->get('1 special character minimum'); ?></p>
                                                <p class="error minimum"><?php echo app('translator')->get('6 character password'); ?></p>
                                            </div>
                                        <?php endif; ?>
                                    </div>

                                    <div class="form-group mb-4">
                                        <label class="form-label" for="password">Confirm Password</label>
                                        <input type="password" class="form-control form--control"
                                               name="password_confirmation" required
                                               placeholder="<?php echo app('translator')->get('Confirm Password'); ?>">
                                    </div>


                                    <?php if($general->agree): ?>
                                        <div class="form-group form-checkbox my-3 text-center">
                                            <input type="checkbox" id="agree" <?php if(old('agree')): echo 'checked'; endif; ?> name="agree"
                                                   required>
                                            <label for="agree"><?php echo app('translator')->get('I agree with'); ?></label>
                                            <span class="text--base">
                                            <a href="<?php echo e(url('')); ?>/policy/privacy-and-policy/93">Policy</a>
                                        </span>
                                        </div>
                                    <?php endif; ?>


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
<script src="<?php echo e(url('')); ?>/assets/dash/vendor/global/global.min.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/vendor/bootstrap-select/dist/<?php echo e(url('')); ?>/assets/dash/js/bootstrap-select.min.js"
        type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/custom.min.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/deznav-init.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/demo.js" type="text/javascript"></script>


</body>
</html>


<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/auth/register.blade.php ENDPATH**/ ?>
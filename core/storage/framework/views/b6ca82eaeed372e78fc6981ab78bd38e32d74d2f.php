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
                        <div class="col-xl-12 p-3">
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

                            <div class="card-body p-3">

                                <div class="col-md-12">
                                    <div class="common-form-style bg-one">
                                        <div class="mb-4">
                                            <h4><?php echo app('translator')->get('Your account is verified successfully. Now you can change your password. Please enter a strong password and don\'t share it with anyone.'); ?></h4>
                                        </div>
                                        <form method="POST" action="<?php echo e(route('user.password.update')); ?>">
                                            <?php echo csrf_field(); ?>
                                            <input type="hidden" name="email" value="<?php echo e($email); ?>">
                                            <div class="form-group mb-3">
                                                <label class="form-label"><?php echo app('translator')->get('Password'); ?></label>
                                                <input type="password" class="form-control form--control" name="password"
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
                                            <div class="form-group mb-3">
                                                <label class="form-label"><?php echo app('translator')->get('Confirm Password'); ?></label>
                                                <input type="password" class="form-control form--control" placeholder="<?php echo app('translator')->get('Confirm Password'); ?>"
                                                       name="password_confirmation" required>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-primary w-100"> <?php echo app('translator')->get('Submit'); ?></button>
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
<script src="<?php echo e(url('')); ?>/assets/dash/vendor/global/global.min.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/vendor/bootstrap-select/dist/<?php echo e(url('')); ?>/assets/dash/js/bootstrap-select.min.js"
        type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/custom.min.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/deznav-init.js" type="text/javascript"></script>
<script src="<?php echo e(url('')); ?>/assets/dash/js/demo.js" type="text/javascript"></script>


</body>
</html>





<?php if($general->secure_password): ?>
    <?php $__env->startPush('script-lib'); ?>
        <script src="<?php echo e(asset('assets/global/js/secure_password.js')); ?>"></script>
    <?php $__env->stopPush(); ?>
<?php endif; ?>


<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/auth//passwords/reset.blade.php ENDPATH**/ ?>
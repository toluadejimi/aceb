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


                            <div class="card-body p-5">

                                <div class="d-flex justify-content-center">
                                    <div class="verification-code-wrapper verify-form">
                                        <div class="verification-area">
                                            <form action="<?php echo e(route('user.password.verify.code')); ?>" method="POST"
                                                  class="submit-form">
                                                <?php echo csrf_field(); ?>
                                                <p class="verification-text"><?php echo app('translator')->get('A 6 digit verification code sent to your email address'); ?>
                                                    : <?php echo e(showEmailAddress($email)); ?></p>
                                                <input type="hidden" name="email" value="<?php echo e($email); ?>">

                                                <?php echo $__env->make($activeTemplate . 'partials.verification_code', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

                                                <div class="mb-4 mt-3 p-5">

                                                    <label><?php echo app('translator')->get('Enter Code'); ?></label>
                                                    <div class="verification-code ">
                                                        <input type="text" name="code" id="verification-code"
                                                               class="form-control"
                                                               required autocomplete="off">
                                                        <div class="boxes">

                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="form-group">
                                                    <button type="submit"
                                                            class="btn btn-primary w-100 mb-4"><?php echo app('translator')->get('Submit'); ?></button>
                                                </div>

                                                <div class="form-group">
                                                    <?php echo app('translator')->get('Please check including your Junk/Spam Folder. if not found, you can'); ?>
                                                    <a href="<?php echo e(route('user.password.request')); ?>"
                                                       class="text--base"><?php echo app('translator')->get('Try to send again'); ?></a>
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











<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/auth/passwords/code_verify.blade.php ENDPATH**/ ?>
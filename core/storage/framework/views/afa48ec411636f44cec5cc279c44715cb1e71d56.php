<?php $__env->startSection('content'); ?>
    <div class="wrapper-content">
        <div class="wrapper-content__header">

        </div>
        <div class="content-body default-height">
            <div class="container-fluid">

                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/user/dashboard">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Change Password</a></li>
                    </ol>
                </div>


                <div class="row mb-none-30">
                    <div class="col-lg-3 col-md-3 mb-30">
                        <div class="card b-radius--5 overflow-hidden">
                            <div class="card-body p-0">

                                <ul class="list-group">

                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <?php echo app('translator')->get('Username'); ?>
                                        <span class="fw-bold"><?php echo e(__($user->username)); ?></span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <?php echo app('translator')->get('Email'); ?>
                                        <span class="fw-bold"><?php echo e($user->email); ?></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-9 col-md-9 mb-30">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title border-bottom pb-2"><?php echo app('translator')->get('Change Password'); ?></h5>

                                <form action="" method="POST" enctype="multipart/form-data">
                                    <?php echo csrf_field(); ?>

                                    <div class="form-group">
                                        <label><?php echo app('translator')->get('Password'); ?></label>
                                        <input class="form-control" type="password" name="current_password" required>
                                    </div>

                                    <div class="form-group">
                                        <label><?php echo app('translator')->get('New Password'); ?></label>
                                        <input class="form-control" type="password" name="password" required>
                                    </div>

                                    <div class="form-group">
                                        <label><?php echo app('translator')->get('Confirm Password'); ?></label>
                                        <input class="form-control" type="password" name="password_confirmation"
                                               required>
                                    </div>
                                    <button type="submit"
                                            class="btn btn-danger w-100 btn-lg h-45"><?php echo app('translator')->get('Submit'); ?></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('user.profile.setting')); ?>" class="btn btn-sm btn-outline--primary"><i
            class="las la-user"></i><?php echo app('translator')->get('Profile Setting'); ?></a>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layout.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/password.blade.php ENDPATH**/ ?>
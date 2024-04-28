<?php $__env->startSection('content'); ?>

    <div class="wrapper-content">
        <div class="wrapper-content__header">
        </div>
        <div class="wrapper-content__body">
            <!-- Main variables *content* -->
            <div id="block_39">
                <div class="block-bg"></div>
                <div class="container-fluid">
                    <div class="reset-password-form">
                        <div class="row reset-password-form__alignment">



                            <div class="col-lg-6">


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



                                <div class="component_card">
                                    <div class="card2">
                                        <form method="POST" action="<?php echo e(route('user.password.update')); ?>">
                                            <?php echo csrf_field(); ?>
                                            <div class="component_form_group">
                                                <div class="">

                                                        <input type="text" class="form-control" id="email"
                                                               hidden value="<?php echo e($email ?? "Email"); ?>" name="email">


                                                    <input type="text" class="form-control" id="email"
                                                           hidden value="<?php echo e($code ?? "Email"); ?>" name="code">

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

                                                </div>
                                                <input type="hidden" name="_csrf"
                                                       value="Id7oGaeO1_8GTh_QTHvThBeI7zoO-7cTa_OJ1iJgX-V3m49Q_sKTx0wZSLk8EJ-ydLG_bEepzX0fgMewVQgIlA==">
                                                <div class="component_button_submit">
                                                    <div class="mt-3">
                                                        <button type="submit" class="btn btn-block btn-big-primary">
                                                            Reset Password
                                                        </button>
                                                    </div>
                                                </div>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.front', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/auth/passwords/reset.blade.php ENDPATH**/ ?>
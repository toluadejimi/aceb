<?php $__env->startSection('content'); ?>

    <div class="wrapper-content">
        <div class="wrapper-content__header">
        </div>
        <div class="wrapper-content__body">
            <!-- Main variables *content* -->
            <div id="block_81">
                <div class="block-bg"></div>
                <div class="container">
                    <div class="block-signin-text ">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="block-signin-text__block-text">
                                    <div class="block-signin-text__block-text-title">
                                        <h1>World fastest and <br> cheapest smm panel&nbsp;</h1>
                                    </div>
                                    <div class="block-signin-text__block-text-description">
                                        <p style="font-size: 17px; margin-top: 10px">&nbsp;#1 SMM PANEL IN THE WORLD!
                                            Get likes, follows, views <br> and everything else
                                            you need from the best SMM panel.&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5">


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
                                        <form method="post" action="<?php echo e(route('user.login')); ?>">
                                            <?php echo csrf_field(); ?>
                                            <div>

                                                <div class="component_form_group">
                                                    <div class="">
                                                        <div class="form-group">
                                                            <label>Username</label>
                                                            <input type="text"
                                                                   value="<?php echo e(old('username')); ?>" name="username"
                                                                   required
                                                                   class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="component_form_group">
                                                    <div class="">
                                                        <div class="form-group">
                                                            <label>Password</label>
                                                            <div class="position-relative">
                                                                <input type="password" name="password"
                                                                       required autocomplete="current-password"
                                                                       class="form-control">
                                                                <div
                                                                    class="sign-in__forgot h-100 d-flex align-items-center">
                                                                    <a href="<?php echo e(route('user.password.request')); ?>">Forgot
                                                                        password?</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="component_checkbox_remember_me">
                                                    <div class="">
                                                        <div class="sign-in__remember-me">
                                                            <div class="form-group__checkbox">
                                                                <label class="form-group__checkbox-label">
                                                                    <input type="checkbox" id="basic_checkbox_1"
                                                                           name="remember"
                                                                           <?php echo e(old('remember') ? 'checked' : ''); ?> id="block_81_remember_me">
                                                                    <span class="checkmark"></span>
                                                                </label>
                                                                <label class="form-group__label-title"
                                                                       for="block_81_remember_me">Remember me</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="component_button_submit">
                                                        <div class="">
                                                            <button class="btn btn-block btn-big-primary" type="submit">
                                                                Sign in
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="hidden" name="_csrf"
                                                   value="95DaaXQEhEmnrg5aykiqsiZ_pRHm2Au76pKBTr8S8uKh1b0gLUjAce35WTO6I-aERUb1R6-KcdWe4c8oyHqlkw==">
                                            <div class="text-center d-flex justify-content-center">
                                                <div>Do not have an account?</div>
                                                <a href="/user/register" class="block-signin-text__sign-up-link">Sign
                                                    up</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div id="block_84">
                <div class="container d-none d-sm-block">
                    <div class="block-signin-text ">
                        <div class="col-lg-12">
                            <img src="<?php echo e(url('')); ?>/assets/pax/body2.svg" alt="logo">
                        </div>
                    </div>
                </div>


                <div class="container-sm d-sm-block d-md-none">
                    <div class="block-signin-text ">
                        <div class="col-lg-12">
                            <img src="<?php echo e(url('')); ?>/assets/pax/bodys2.svg" alt="logo">
                        </div>
                    </div>
                </div>


            </div>

            <div id="block_8">
                <div class="container d-none d-sm-block">
                    <div class="block-signin-text ">
                        <div class="col-lg-12">
                            <img src="<?php echo e(url('')); ?>/assets/pax/body3.svg" alt="logo">
                        </div>
                    </div>
                </div>


                <div class="container-sm d-sm-block d-md-none">
                    <div class="block-signin-text ">
                        <div class="col-lg-12">
                            <img style="margin-top: -105px; margin-bottom: -170px;"
                                 src="<?php echo e(url('')); ?>/assets/pax/bodys3.svg" alt="logo">
                        </div>
                    </div>
                </div>
            </div>


            <div id="block_84">
                <div class="container d-none d-sm-block">
                    <div class="block-signin-text ">
                        <div class="col-lg-12">
                            <img src="<?php echo e(url('')); ?>/assets/pax/body4.svg" alt="logo">
                        </div>
                    </div>
                </div>


                <div class="container-sm d-sm-block d-md-none">
                    <div class="block-signin-text ">
                        <div class="col-lg-12">
                            <img src="<?php echo e(url('')); ?>/assets/pax/bodys4.svg" alt="logo">
                        </div>
                    </div>
                </div>


            </div>


            <div id="block_85" style="margin-top: 50px">
                <div class="block-bg"></div>
                <div class="container">
                    <div class="how-it-works ">
                        <div class="row how-it-works-row justify-content-start">
                            <div class="col-md-3 how-it-works-col">
                                <div class="card how-it-works-card" style="
                 background: none;                                             											 color: inherit; 																																																																																																																																																										 box-shadow: none; 											">
                                    <div class="how-it-works-arrow-top style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-942.000000, -1387.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M889.516523,26.5080119 L891.910644,20.9496585 L902,32.9164837 L886.372927,33.807873 L888.723185,28.3469617 C871.347087,21.9210849 854.507984,19.7125409 838.195168,21.7129851 C818.169006,24.1687976 798.907256,32.9719131 780.398868,48.1424468 L779.638673,48.7694781 L778.869195,49.4081513 L777.591849,47.8691952 L778.361327,47.2305219 C797.38492,31.4407805 817.252224,22.2662407 837.951732,19.7278557 C854.622929,17.6834632 871.814783,19.9463129 889.516523,26.5080119 Z"
                                                            id="Line3"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="how-it-works-arrow-bottom style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-657.000000, -1461.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M493.869195,93.5918487 L494.638673,94.2305219 C513.37968,109.785715 532.894675,118.797561 553.195168,121.287015 C569.507984,123.287459 586.347087,121.078915 603.723185,114.653038 L601.372927,109.192127 L617,110.083516 L606.910644,122.050341 L604.516523,116.491988 C586.814783,123.053687 569.622929,125.316537 552.951732,123.272144 C532.528218,120.767604 512.914862,111.802694 494.12272,96.3975396 L493.361327,95.7694781 L492.591849,95.1308048 L493.869195,93.5918487 Z"
                                                            id="Line2"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center how-it-works-preview">
                                        <div
                                            class="how-it-works-number style-box-shadow-default style-bg-light style-border-radius-50 style-card-number"
                                            style="
                              width: 80px; 															 height: 80px; 															 background: var(--color-id-78); 																														 border-top-left-radius: 50px; 															 border-bottom-left-radius: 50px; 															 border-top-right-radius: 50px; 															 border-bottom-right-radius: 50px; 																																																																																																									 font-size: 24px; 															 color: var(--color-id-92); ">
                                            1
                                        </div>
                                    </div>
                                    <div class="how-it-works-title"
                                         style="margin-bottom: 12px; padding-left: 0px; padding-right: 0x;">
                                        <p class="text-center"><span style="text-align: CENTER"><strong
                                                    style="font-weight: bold">Sign Up</strong></span></p>
                                    </div>
                                    <div class="how-it-works-description" style="padding-left: 0px; padding-right: 0x;">
                                        <p class="text-center"><span style="text-align: CENTER">Create an account and log in</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 how-it-works-col">
                                <div class="card how-it-works-card" style="
                 background: none;                                             											 color: inherit; 																																																																																																																																																										 box-shadow: none; 											">
                                    <div class="how-it-works-arrow-top style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-942.000000, -1387.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M889.516523,26.5080119 L891.910644,20.9496585 L902,32.9164837 L886.372927,33.807873 L888.723185,28.3469617 C871.347087,21.9210849 854.507984,19.7125409 838.195168,21.7129851 C818.169006,24.1687976 798.907256,32.9719131 780.398868,48.1424468 L779.638673,48.7694781 L778.869195,49.4081513 L777.591849,47.8691952 L778.361327,47.2305219 C797.38492,31.4407805 817.252224,22.2662407 837.951732,19.7278557 C854.622929,17.6834632 871.814783,19.9463129 889.516523,26.5080119 Z"
                                                            id="Line3"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="how-it-works-arrow-bottom style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-657.000000, -1461.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M493.869195,93.5918487 L494.638673,94.2305219 C513.37968,109.785715 532.894675,118.797561 553.195168,121.287015 C569.507984,123.287459 586.347087,121.078915 603.723185,114.653038 L601.372927,109.192127 L617,110.083516 L606.910644,122.050341 L604.516523,116.491988 C586.814783,123.053687 569.622929,125.316537 552.951732,123.272144 C532.528218,120.767604 512.914862,111.802694 494.12272,96.3975396 L493.361327,95.7694781 L492.591849,95.1308048 L493.869195,93.5918487 Z"
                                                            id="Line2"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center how-it-works-preview">
                                        <div
                                            class="how-it-works-number style-box-shadow-default style-bg-light style-border-radius-50 style-card-number"
                                            style="
                              width: 80px; 															 height: 80px; 															 background: var(--color-id-78); 																														 border-top-left-radius: 50px; 															 border-bottom-left-radius: 50px; 															 border-top-right-radius: 50px; 															 border-bottom-right-radius: 50px; 																																																																																																									 font-size: 24px; 															 color: var(--color-id-92); ">
                                            2
                                        </div>
                                    </div>
                                    <div class="how-it-works-title"
                                         style="margin-bottom: 12px; padding-left: 0px; padding-right: 0x;">
                                        <p class="text-center"><span style="text-align: CENTER"><strong
                                                    style="font-weight: bold">Add Funds</strong></span></p>
                                    </div>
                                    <div class="how-it-works-description" style="padding-left: 0px; padding-right: 0x;">
                                        <p class="text-center"><span style="text-align: CENTER">Choose a payment you want</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 how-it-works-col">
                                <div class="card how-it-works-card" style="
                 background: none;                                             											 color: inherit; 																																																																																																																																																										 box-shadow: none; 											">
                                    <div class="how-it-works-arrow-top style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-942.000000, -1387.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M889.516523,26.5080119 L891.910644,20.9496585 L902,32.9164837 L886.372927,33.807873 L888.723185,28.3469617 C871.347087,21.9210849 854.507984,19.7125409 838.195168,21.7129851 C818.169006,24.1687976 798.907256,32.9719131 780.398868,48.1424468 L779.638673,48.7694781 L778.869195,49.4081513 L777.591849,47.8691952 L778.361327,47.2305219 C797.38492,31.4407805 817.252224,22.2662407 837.951732,19.7278557 C854.622929,17.6834632 871.814783,19.9463129 889.516523,26.5080119 Z"
                                                            id="Line3"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="how-it-works-arrow-bottom style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-657.000000, -1461.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M493.869195,93.5918487 L494.638673,94.2305219 C513.37968,109.785715 532.894675,118.797561 553.195168,121.287015 C569.507984,123.287459 586.347087,121.078915 603.723185,114.653038 L601.372927,109.192127 L617,110.083516 L606.910644,122.050341 L604.516523,116.491988 C586.814783,123.053687 569.622929,125.316537 552.951732,123.272144 C532.528218,120.767604 512.914862,111.802694 494.12272,96.3975396 L493.361327,95.7694781 L492.591849,95.1308048 L493.869195,93.5918487 Z"
                                                            id="Line2"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center how-it-works-preview">
                                        <div
                                            class="how-it-works-number style-box-shadow-default style-bg-light style-border-radius-50 style-card-number"
                                            style="
                              width: 80px; 															 height: 80px; 															 background: var(--color-id-78); 																														 border-top-left-radius: 50px; 															 border-bottom-left-radius: 50px; 															 border-top-right-radius: 50px; 															 border-bottom-right-radius: 50px; 																																																																																																									 font-size: 24px; 															 color: var(--color-id-92); ">
                                            3
                                        </div>
                                    </div>
                                    <div class="how-it-works-title"
                                         style="margin-bottom: 10px; padding-left: 0px; padding-right: 0px;">
                                        <p class="text-center"><strong style="font-weight: bold">Give an Order</strong>
                                        </p>
                                    </div>
                                    <div class="how-it-works-description"
                                         style="padding-left: 0px; padding-right: 0px;">
                                        <p>&nbsp;&nbsp;&nbsp;Pick up a service and send the order</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 how-it-works-col">
                                <div class="card how-it-works-card" style="
                 background: none;                                             											 color: inherit; 																																																																																																																																																										 box-shadow: none; 											">
                                    <div class="how-it-works-arrow-top style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-942.000000, -1387.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M889.516523,26.5080119 L891.910644,20.9496585 L902,32.9164837 L886.372927,33.807873 L888.723185,28.3469617 C871.347087,21.9210849 854.507984,19.7125409 838.195168,21.7129851 C818.169006,24.1687976 798.907256,32.9719131 780.398868,48.1424468 L779.638673,48.7694781 L778.869195,49.4081513 L777.591849,47.8691952 L778.361327,47.2305219 C797.38492,31.4407805 817.252224,22.2662407 837.951732,19.7278557 C854.622929,17.6834632 871.814783,19.9463129 889.516523,26.5080119 Z"
                                                            id="Line3"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="how-it-works-arrow-bottom style-svg-g-primary">
                                        <svg width="125px" height="31px" viewBox="0 0 125 31" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="Landing" stroke="none" stroke-width="1" fill="none"
                                               fill-rule="evenodd">
                                                <g transform="translate(-657.000000, -1461.000000)" fill="#1E79E4"
                                                   id="Group-10">
                                                    <g transform="translate(165.000000, 1368.000000)">
                                                        <path
                                                            d="M493.869195,93.5918487 L494.638673,94.2305219 C513.37968,109.785715 532.894675,118.797561 553.195168,121.287015 C569.507984,123.287459 586.347087,121.078915 603.723185,114.653038 L601.372927,109.192127 L617,110.083516 L606.910644,122.050341 L604.516523,116.491988 C586.814783,123.053687 569.622929,125.316537 552.951732,123.272144 C532.528218,120.767604 512.914862,111.802694 494.12272,96.3975396 L493.361327,95.7694781 L492.591849,95.1308048 L493.869195,93.5918487 Z"
                                                            id="Line2"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center how-it-works-preview">
                                        <div
                                            class="how-it-works-number style-box-shadow-default style-bg-light style-border-radius-50 style-card-number"
                                            style="
                              width: 80px; 															 height: 80px; 															 background: var(--color-id-78); 																														 border-top-left-radius: 50px; 															 border-bottom-left-radius: 50px; 															 border-top-right-radius: 50px; 															 border-bottom-right-radius: 50px; 																																																																																																									 font-size: 24px; 															 color: var(--color-id-92); ">
                                            4
                                        </div>
                                    </div>
                                    <div class="how-it-works-title"
                                         style="margin-bottom: 12px; padding-left: 0px; padding-right: 0x;">
                                        <p class="text-center"><span style="text-align: CENTER"><strong
                                                    style="font-weight: bold">6. Enjoy</strong></span></p>
                                    </div>
                                    <div class="how-it-works-description"
                                         style="padding-left: 0px; padding-right: 0px;">
                                        <p><strong style="font-weight: bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>That's
                                            it enjoy the results<em style="font-style: italic">&nbsp;</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="block_89">
                <div class="block-bg"></div>
                <div class="container">
                    <div class="header-with-text ">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-block__title">
                                    <h2 class="text-center"><span
                                            style="text-align: CENTER">Boost yout brand reputation</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="text-block__description">
                                    <p class="text-center">We are help dominate social media with the largest social
                                        media panel.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div id="block_87">
                <div class="block-bg"></div>
                <div class="block-divider-bottom">
                    <svg width="100%" height="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g fill="currentColor">
                            <path d="M0 47.44L170 0l626.48 94.89L1110 87.11l170-39.67V140H0V47.44z" fill-opacity=".5"/>
                            <path d="M0 90.72l140-28.28 315.52 24.14L796.48 65.8 1140 104.89l140-14.17V140H0V90.72z"/>
                        </g>
                    </svg>
                </div>
                <div class="container">
                    <div class="reviews-slider ">

                        <div class="reviews-slider">
                            <div data-slider="1"
                                 data-slider-options="{'dots':true,'infinite':true,'speed':500,'autoplay':true,'autoplaySpeed':5000,'slidesToShow':2,'slidesToScroll':1,'responsive':[{'breakpoint':991,'settings':{'slidesToShow':1,'slidesToScroll':1}}],'rtl':false}">
                                <div class="reviews-slider__slide">
                                    <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ">
                                        <div class="reviews-slider__slide-photo"
                                             style="margin-bottom: 16px; justify-content: flex-start;">
                                            <div class="reviews-slider__slide-avatar"
                                                 style="background-image: url(img/no_image.png);"></div>
                                        </div>
                                        <div class="reviews-slider__slide-name"
                                             style="padding-left: 0px; padding-right: 0px; margin-bottom: 10px;">
                                            <p><strong style="font-weight: bold">Juliana Diaz</strong></p>
                                        </div>
                                        <div class="reviews-slider__slide-description"
                                             style="padding-left: 0px; padding-right: 0px;">
                                            <p>I do SMM promotions for different businesses and this panel has been such
                                                a great discovery for me! I used to spend lots of time doing some tasks
                                                that can be done super quickly now because SMM services here are
                                                delivered so fast. Thank you guys!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="reviews-slider__slide">
                                    <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ">
                                        <div class="reviews-slider__slide-photo"
                                             style="margin-bottom: 16px; justify-content: flex-start;">
                                            <div class="reviews-slider__slide-avatar"
                                                 style="background-image: url(img/no_image.png);"></div>
                                        </div>
                                        <div class="reviews-slider__slide-name"
                                             style="padding-left: 0px; padding-right: 0px; margin-bottom: 8px;">
                                            <p><strong style="font-weight: bold">Sophia Harris</strong></p>
                                        </div>
                                        <div class="reviews-slider__slide-description"
                                             style="padding-left: 0px; padding-right: 0px;">
                                            <p>If you're wondering how you can help your social media accounts get more
                                                attention fast, this is it! No need to wait for a long time either
                                                because SMM services on this panel are delivered super quickly. The
                                                services are sooo cheap too.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="reviews-slider__slide">
                                    <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ">
                                        <div class="reviews-slider__slide-photo"
                                             style="margin-bottom: 10px; justify-content: flex-start;">
                                            <div class="reviews-slider__slide-avatar"
                                                 style="background-image: url(img/no_image.png);"></div>
                                        </div>
                                        <div class="reviews-slider__slide-name"
                                             style="padding-left: 0px; padding-right: 0px; margin-bottom: 8px;">
                                            <p><strong style="font-weight: bold">Bayram Koc</strong></p>
                                        </div>
                                        <div class="reviews-slider__slide-description"
                                             style="padding-left: 0px; padding-right: 0px;">
                                            <p>I help different businesses to get more exposure online by managing their
                                                social media accounts. Let me tell you this: SMM services that this
                                                panel offers help me save so much extra money and earn way more than I
                                                did before I discovered these guys. Couldn't recommend them enough.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div id="block_90">
                <div class="block-bg"></div>
                <div class="container">
                    <div class="faq ">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-lg-12">


                                        <div class="header-with-text ">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="text-block__title">
                                                        <h2 class="text-center"><span
                                                                style="text-align: CENTER">Frequently asked questions</span>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="text-block__description">
                                                        <p class="text-center" style="margin-bottom: 30px">We are help
                                                            dominate social media with the largest social
                                                            media panel.</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                        <div class="faq-block__card">
                                            <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                                                <div class="faq-block__header collapsed" data-toggle="collapse"
                                                     data-target="#faq-block-90-1" aria-expanded="false"
                                                     aria-controls="#faq-block-90-1">
                                                    <div class="faq-block__header-title">
                                                        <h4>What is an SMM panel?</h4>
                                                    </div>
                                                    <div class="faq-block__header-icon">
                                                        <div class="style-text-dark faq-block__icon"
                                                             style="color: var(--color-id-93);"></div>
                                                    </div>
                                                </div>
                                                <div class="faq-block__body collapse" id="faq-block-90-1">
                                                    <div class="faq-block__body-description" style="padding-top: 8px">
                                                        <p>SMM panels are online stores where people are able to
                                                            purchase cheap SMM services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="faq-block__card">
                                            <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                                                <div class="faq-block__header collapsed" data-toggle="collapse"
                                                     data-target="#faq-block-90-2" aria-expanded="false"
                                                     aria-controls="#faq-block-90-2">
                                                    <div class="faq-block__header-title">
                                                        <h4>What SMM services can I buy on your panel?</h4>
                                                    </div>
                                                    <div class="faq-block__header-icon">
                                                        <div class="style-text-dark faq-block__icon"
                                                             style="color: var(--color-id-93);"></div>
                                                    </div>
                                                </div>
                                                <div class="faq-block__body collapse" id="faq-block-90-2">
                                                    <div class="faq-block__body-description" style="padding-top: 8px">
                                                        <p>Our panel provides different types of SMM services, such as
                                                            followers, views, likes and more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="faq-block__card">
                                            <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                                                <div class="faq-block__header collapsed" data-toggle="collapse"
                                                     data-target="#faq-block-90-3" aria-expanded="false"
                                                     aria-controls="#faq-block-90-3">
                                                    <div class="faq-block__header-title">
                                                        <h4>Are SMM services offered here safe to order?</h4>
                                                    </div>
                                                    <div class="faq-block__header-icon">
                                                        <div class="style-text-dark faq-block__icon"
                                                             style="color: var(--color-id-93);"></div>
                                                    </div>
                                                </div>
                                                <div class="faq-block__body collapse" id="faq-block-90-3">
                                                    <div class="faq-block__body-description" style="padding-top: 8px">
                                                        <p>Using our SMM services is 100% safe, our panel is secure and
                                                            we offer high-quality services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="faq-block__card">
                                            <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                                                <div class="faq-block__header collapsed" data-toggle="collapse"
                                                     data-target="#faq-block-90-4" aria-expanded="false"
                                                     aria-controls="#faq-block-90-4">
                                                    <div class="faq-block__header-title">
                                                        <h4>A mass order — what is it?</h4>
                                                    </div>
                                                    <div class="faq-block__header-icon">
                                                        <div class="style-text-dark faq-block__icon"
                                                             style="color: var(--color-id-93);"></div>
                                                    </div>
                                                </div>
                                                <div class="faq-block__body collapse" id="faq-block-90-4">
                                                    <div class="faq-block__body-description" style="padding-top: 8px">
                                                        <p>A mass order allows placing multiple orders at once.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="faq-block__card">
                                            <div class="card" style="
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ">
                                                <div class="faq-block__header collapsed" data-toggle="collapse"
                                                     data-target="#faq-block-90-5" aria-expanded="false"
                                                     aria-controls="#faq-block-90-5">
                                                    <div class="faq-block__header-title">
                                                        <h4>What is the purpose of Drip-feed?</h4>
                                                    </div>
                                                    <div class="faq-block__header-icon">
                                                        <div class="style-text-dark faq-block__icon"
                                                             style="color: var(--color-id-93);"></div>
                                                    </div>
                                                </div>
                                                <div class="faq-block__body collapse" id="faq-block-90-5">
                                                    <div class="faq-block__body-description" style="padding-top: 8px">
                                                        <p>The engagement on the chosen account can be built gradually,
                                                            and Drip-feed will help you with that. For example, if you
                                                            want 2000 likes on your Instagram post, you can divide them
                                                            into parts for a seamless effect: as an option, you can get
                                                            200 likes/day for 10 days.</p>
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

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.front', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/auth/login.blade.php ENDPATH**/ ?>
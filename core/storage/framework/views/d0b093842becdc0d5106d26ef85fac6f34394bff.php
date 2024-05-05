<?php $__env->startSection('content'); ?>

    <style>
        .modal-backdrop {
            z-index: -1;
        }
    </style>


    <div class="wrapper-content">
        <div class="wrapper-content__header"></div>
        <div class="wrapper-content__body">





            <div id="block_61">
                <div class="block-bg"></div>
                <div class="container-fluid d-flex justify-content-center">
                    <div class="new_order-block">
                        <div class="row new-order-form">
                            <div class="col-lg-12">
                                <div class="component_form_group component_card component_radio_button">
                                    <div class="card2">
                                        <div class="card-body">

                                            <p>IMPORTANT | Make sure to click pay  to get a new account number each time you
                                                want to fund your wallet.
                                            </p><br />

                                            <p>Make sure to pay in the exact amount you inputted.</p><br />

                                            <p>Reach us by <a href="https://api.whatsapp.com/send?phone=2348123053541&text=Hello, i want to make report.">clicking here</a> or whatsapp   
                                                for payment related issues. </p>
                                            <br />



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="row justify-content-center my-5">

                <div class="col-lg-8">


                    <?php if($errors->any()): ?>
                        <div class="alert alert-danger">
                            <ul>
                                <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <li><?php echo e($error); ?></li>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                    <?php if(session()->has('message')): ?>
                        <div class="alert alert-success">
                            <?php echo e(session()->get('message')); ?>

                        </div>
                    <?php endif; ?>
                    <?php if(session()->has('error')): ?>
                        <div class="alert alert-danger">
                            <?php echo e(session()->get('error')); ?>

                        </div>
                    <?php endif; ?>


                    <form action="<?php echo e(route('user.deposit.insert')); ?>" method="post">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="method_code">
                        <input type="hidden" name="currency">
                        <div class="card2">
                            <div class="card-header">
                                <h5 class="card-title"><?php echo app('translator')->get('Fund Wallet'); ?></h5>
                            </div>
                            <div class="card-body">

                                <div class="form-group">
                                    <label class="form-label"><?php echo app('translator')->get('Payment Method'); ?></label>
                                    <div class="input-group">
                                        <select type="number" step="any" name="gateway" class="form-control form--control" required >
                                            <option value="">Select payment method</option>
                                            <option value="1">Instant Payment</option>
                                            <option value="2">Manual Payment</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label"><?php echo app('translator')->get('Amount'); ?></label>
                                    <div class="input-group">
                                        <input type="number" step="any" name="amount"
                                            class="form-control form--control" value="<?php echo e(old('amount')); ?>"
                                            autocomplete="off" required placeholder="Enter amount to fund">
                                        <span class="input-group-text"><?php echo e($general->cur_text); ?></span>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-block btn-big-primary">
                                    Pay
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



            <div class="col-md-12 justify-content-center my-5">



                <div class="card2">
                    <div class="card-body">

                        <div class="services-list__table">
                            <div class="table-bg component_table">

                                <div class="table-wr table-responsive editor__component-wrapper ">
                                    <table class="table " id="service-table-59">
                                        <thead>
                                            <tr>


                                                <th> </th>
                                                <th class=""><?php echo app('translator')->get('Amount'); ?></th>
                                                <th> </th>
                                                <th> </th>
                                                <th> </th>
                                                <th class=""><?php echo app('translator')->get('Action'); ?></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php $__empty_1 = true; $__currentLoopData = @$deposits; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $deposit): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                                <tr>


                                                    <div class="modal fade" id="exampleModal<?php echo e($deposit->id); ?>"
                                                        tabindex="" aria-labelledby="exampleModalLabel"
                                                        data-backdrop="false" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">
                                                                        Resolve
                                                                        Deposit
                                                                    </h5>
                                                                    <button type="button" class="btn-close"
                                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>


                                                                <div class="modal-body">


                                                                    <p>Resolve pending transactions by using your bank
                                                                        session ID /
                                                                        Refrence
                                                                        No on your transaction recepit</p>

                                                                    <form action="/user/session-resolve" method="POST">
                                                                        <?php echo csrf_field(); ?>

                                                                        <label class="">Transaction ID</label>

                                                                        <div>
                                                                            <?php echo e($deposit->trx); ?>


                                                                        </div>


                                                                        <label class="my-3">Enter Session ID</label>
                                                                        <div>
                                                                            <input type="text" name="session_id" required
                                                                                class="form-control"
                                                                                placeholder="Enter session ID">

                                                                            <input type="text" hidden name="order_id"
                                                                                value="<?php echo e($deposit->trx); ?>">

                                                                        </div>


                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary"
                                                                        data-bs-dismiss="modal">Close</button>
                                                                    <button type="submit"
                                                                        class="btn btn-success">Verify</button>
                                                                </div>

                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div>




                                                    


                                                    

                                                    <td></td>
                                                    <td class="">

                                                        N <?php echo e(showAmount($deposit->amount + $deposit->charge)); ?>


                                                    </td>

















                                                    <td></td>
                                                    <td></td>
                                                    <td></td>


                                                <?php if($deposit->status == 2): ?>
                                                        <td>
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal<?php echo e($deposit->id); ?>"
                                                                class="btn btn-warning text-white">
                                                                <i class="las la-coin"></i>
                                                                <?php echo app('translator')->get('Resolve'); ?>
                                                            </a>
                                                        </td>
                                                    <?php elseif($deposit->status == 1): ?>
                                                        <td>
                                                            <a href="#" class="btn btn-success btn-sm text-white">
                                                                <i class="las la-bank"></i>
                                                                <?php echo app('translator')->get('Completed'); ?>
                                                            </a>
                                                        </td>
                                                    <?php elseif($deposit->status == 5): ?>
                                                        <td>
                                                            <a href="#" class="btn btn-success text-white btn-sm">
                                                                <i class="las la-bank"></i>
                                                                <?php echo app('translator')->get('Reslove Completed'); ?>
                                                            </a>
                                                        </td>
                                                    <?php endif; ?>




                                                </tr>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                                <tr>
                                                    <td colspan="100%" class="text-center"><?php echo e(__($emptyMessage)); ?>

                                                    </td>
                                                </tr>
                                            <?php endif; ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <?php if($deposits->hasPages()): ?>
                                <div class="card-footer">
                                    <?php echo e($deposits->links()); ?>

                                </div>
                            <?php endif; ?>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    <?php $__env->stopSection(); ?>

    <?php $__env->startPush('breadcrumb-plugins'); ?>
        <?php if (isset($component)) { $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4 = $component; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.back','data' => ['route' => ''.e(route('user.deposit.history')).'']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('back'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(Illuminate\View\AnonymousComponent::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes(['route' => ''.e(route('user.deposit.history')).'']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4)): ?>
<?php $component = $__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4; ?>
<?php unset($__componentOriginalc254754b9d5db91d5165876f9d051922ca0066f4); ?>
<?php endif; ?>
    <?php $__env->stopPush(); ?>

<?php echo $__env->make('layout.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/payment/deposit.blade.php ENDPATH**/ ?>
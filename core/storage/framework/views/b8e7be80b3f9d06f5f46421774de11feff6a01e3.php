<?php $__env->startSection('content'); ?>


    <div class="wrapper-content">
        <div class="wrapper-content__header"></div>
        <div class="wrapper-content__body">
            <!-- Main variables *content* -->
            <div id="block_59">
                <div class="block-bg"></div>
                <div class="container-fluid">
                    <meta name="viewport" content="width=991, initial-scale=0" />
                    <div class="services-list">
                        <div class="row">
                            <div class="col">
                                <div
                                    class="services-filters component_filter_form_group component_filter_card mb-3"
                                >
                                    <div class="card">
                                        <div class="row">

                                            <div class="col">
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Search"
                                                        data-search-service="#service-table-59"
                                                    />
                                                    <span
                                                        class="input-group-append component_button_search"
                                                    >
                                <button
                                    class="btn btn-big-secondary"
                                    type="button"
                                    data-filter-serch-btn="true"
                                >
                                  <i class="fas fa-search"></i>
                                </button>
                              </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="services-list__table">
                                    <div class="table-bg component_table">
                                        <div
                                            class="table-wr table-responsive editor__component-wrapper"
                                        >
                                            <table class="table" id="service-table-59">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th class="nowrap">Service</th>
                                                    <th class="nowrap">Rate per 1000</th>
                                                    <th class="nowrap">Min order</th>
                                                    <th class="nowrap">Max order</th>
                                                    <th class="nowrap" nowrap>
                                                        <div class="d-flex align-items-center">
                                                            <span>Average time</span>
                                                            <span
                                                                class="ml-1 mr-1 fa fa-exclamation-circle"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="The average time is based on 10 latest completed orders per 1000 quantity."
                                                            ></span>
                                                        </div>
                                                    </th>

                                                </tr>
                                                </thead>
                                                <tbody id="service-tbody">


                                                    <?php $__empty_1 = true; $__currentLoopData = $service; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>

                                                        <tr data-filter-table-category-id="14538">

                                                        <td
                                                            data-label="ID"
                                                            data-filter-table-service-id="1401"
                                                        >
                                                            <?php echo e($data->api_service_id); ?>

                                                        </td>

                                                        <td
                                                            data-label="Service"
                                                            class="table-service"
                                                            data-filter-table-service-name="true"
                                                        >
                                                            <?php echo e($data->name); ?>

                                                        </td>

                                                        <td data-label="Rate per 1000">NGN <?php echo e(number_format($data->price_per_k, 2)); ?></td>
                                                        <td data-label="Min order"><?php echo e($data->min); ?></td>
                                                        <td data-label="Max order"><?php echo e($data->max); ?></td>
                                                        <td data-label="Average time" class="nowrap">
                                                            Instant
                                                        </td>



                                                </tr>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                                        No Service Found
                                                    <?php endif; ?>



                                                </tbody>


                                            </table>

                                            <div class="d-flex justify-content-center my-5">
                                                <?php echo e($service->links()); ?>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="modal fade"
                        tabindex="-1"
                        role="dialog"
                        id="service-description-59"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button
                                        class="close"
                                        type="button"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <i class="fas fa-times"></i>
                                    </button>
                                    <div class="service-description-content"></div>
                                    <button
                                        class="btn btn-block btn-big-primary"
                                        id="createQuickOrder"
                                        style="margin-top: 24px"
                                    >
                                        Create order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.front', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/service.blade.php ENDPATH**/ ?>
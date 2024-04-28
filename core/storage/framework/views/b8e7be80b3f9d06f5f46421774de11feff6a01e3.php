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
                                                    <th
                                                        class="hidden-xs hidden-sm service-description__th"
                                                    >
                                                        Description
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody id="service-tbody">
                                                <tr data-filter-table-category-id="14538">
                                                    <td
                                                        data-label="ID"
                                                        data-filter-table-service-id="1401"
                                                    >
                                                        1401
                                                    </td>
                                                    <td
                                                        data-label="Service"
                                                        class="table-service"
                                                        data-filter-table-service-name="true"
                                                    >
                                                        Instagram Likes - Cheapest
                                                    </td>
                                                    <td data-label="Rate per 1000">$0.0135</td>
                                                    <td data-label="Min order">10</td>
                                                    <td data-label="Max order">200 000</td>
                                                    <td data-label="Average time" class="nowrap">
                                                        81 hours 55 minutes
                                                    </td>
                                                    <td
                                                        data-label=""
                                                        class="services-list__description"
                                                    >
                                                        <div class="component_button_view">
                                                            <div class="">
                                                                <button
                                                                    class="btn btn-actions btn-view-service-description"
                                                                    data-toggle="modal"
                                                                    data-content-id="#service-description-id-59-1401"
                                                                    data-service-id="1401"
                                                                    data-service-name="Instagram Likes - Cheapest"
                                                                    data-min="10"
                                                                    data-max="200 000"
                                                                    data-target="#service-description-59"
                                                                >
                                                                    View
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="d-none"
                                                            id="service-description-id-59-1401"
                                                        >
                                                            Current speed 5K+/H<br />Drop: 100%
                                                            <br />Guarantee: no refill <br />Cancel
                                                            enabled <br /><br />However please do not
                                                            forget these are just estimations
                                                        </div>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </table>
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
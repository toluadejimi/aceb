<?php $__env->startSection('content'); ?>
    <div class="wrapper-content">
        <div class="wrapper-content__header"></div>
        <div class="wrapper-content__body">

            <div id="block_61">
                <div class="block-bg"></div>
                <div class="container-fluid">
                    <div class="new_order-block">
                        <div class="row new-order-form">
                            <div class="col-lg-8">
                                <div class="component_form_group component_card component_radio_button">
                                    <div class="card2">
                                        <div class="card-body">

                                            <p>IMPORTANT  | Always input payment amount and click pay to get a new account
                                                number every time you want to deposit.
                                                <br><strong> Do not pay into an old account number you've used
                                                    before. </strong>
                                            </p><br />

                                            <p>Reach us by <a href="https://api.whatsapp.com/send?phone=2348123053541&text=Hello, i want to make report.">clicking here</a> or whatsapp +2348123053541
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
            <div id="block_61">
                <div class="block-bg"></div>
                <div class="container-fluid">
                    <div class="new_order-block">
                        <div class="row new-order-form">
                            <div class="col-lg-8">
                                <div class="component_form_group component_card component_radio_button">
                                    <div class="card2">
                                        <div class="card-body">

                                            <ul>

                                                <li>
                                                    <a href="#">   TUTORIALS TO GET YOU STARTED</a>
                                                </li>

                                                <li>
                                                    <a href="#">   UNDERSTANDING OUR DESCRIPTIONS</a>
                                                </li>

                                                <li>
                                                    <a href="#">   UNDERSTANDING YOUR ORDER STATUS</a>
                                                </li>

                                                <li>
                                                    <a href="#">   WHY IS YOUR ORDER NOT DELIVERING</a>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <?php if($errors->any()): ?>
                <div class="alert alert-danger my-4">
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
                <div class="alert alert-danger mt-2">
                    <?php echo e(session()->get('error')); ?>

                </div>
            <?php endif; ?>


            <div id="block_61">
                <div class="block-bg"></div>
                <div class="container-fluid d-flex justify-content-center">
                    <div class="new_order-block">
                        <div class="row new-order-form">
                            <div class="col-lg-12">
                                <div class="component_form_group component_card component_radio_button">
                                    <div class="card2">

                                        <form action="order/create" method="post">
                                            <?php echo csrf_field(); ?>

                                            <h5>Create a new order</h5>
                                            <hr>

                                            <div class="component_button_forms">














                                                <div class="form-group">
                                                    <label for="orderform-category" class="control-label">Category</label>
                                                    <select class="form-control" name="cat" class="form-control" id="country-dropdown">
                                                        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                                                            <option data-type="12" value="<?php echo e($category->id); ?>"
                                                                data-template="<?php echo e($category->id); ?> <?php echo e($category->name); ?>">
                                                                <?php echo e($category->name); ?>

                                                            </option>
                                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                                                    </select>
                                                </div>



                                                <div class="form-group">
                                                    <label for="orderform-category" class="control-label">Choose Service</label>
                                                    <select class="form-control select-2"
                                                        id="state-dropdown" required name="service" placeholder="Choose service"
                                                        data-select="true" data-select-search="true"
                                                        data-select-search-placeholder="Search"
                                                        data-select-container="#select-category-container" tabindex="-1"
                                                        aria-hidden="true">
                                                    </select>


                                                    <div class="form-group fields mt-3" id="order_link">
                                                        <label class="control-label"
                                                            for="field-orderform-fields-link">Link</label>
                                                        <input class="form-control" name="link" value=""
                                                        required type="text" id="field-orderform-fields-link" />
                                                    </div>

                                                    <div class="form-group fields" id="order_quantity">
                                                        <label class="control-label"
                                                            for="field-orderform-fields-quantity">Quantity</label>
                                                        <input class="form-control" type="number" autofocus id="num1" required name="qty"
                                                            id="field-orderform-fields-quantity" />


                                                            <div class="row ">
                                                                <div class="col d-flex justify-content-start">
                                                                    Min: <span class="text-muted" id="min"> </span> |    Max: <span id="max" class="text-muted" ></span>
                                                                </div>
                                                                <div class="col d-flex justify-content-end">
                                                                    NGN<span class=" help-block min-max" id="price"></span> </div>
                                                            </div>

                                                            <input type="number" hidden id="min2" name="min">

                                                    </div>





                                                <div id="fields">
                                                    <div class="form-group fields">
                                                        <label class="control-label mt-3"
                                                            for="field-orderform-fields-average_time">Details
                                                            <span class="ml-1 mr-1 fa fa-exclamation-circle"
                                                                data-toggle="tooltip" data-placement="right"
                                                                title=""
                                                                data-original-title="Order details.">
                                                            </span>
                                                        </label>

                                                        <div class="">

                                                            <p id="details">


                                                            </p>

                                                        </div>


                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="charge" class="control-label">Charge</label>
                                                    <input type="number" disabled id="result2" name="charge" class="form-control">

                                                </div>
                                            </div>
                                            <input type="hidden" name="_csrf"
                                                value="UDF3Kox6o-9TyDR3i3nZAvF5ddzG9O8-aXETVcKFGZggYjBTzyDBmQOKQibqP-tWmj0_lKOXog8uK1ojr9pUqA==" />
                                            <div class="new-order-button-submit component_button_submit">
                                                <button type="submit" class="btn btn-block btn-big-primary">
                                                    Submit
                                                </button>
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




    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {

            /*------------------------------------------
            --------------------------------------------
            Country Dropdown Change Event
            --------------------------------------------
            --------------------------------------------*/
            $('#country-dropdown').on('change', function() {
                var cat = this.value;
                $("#state-dropdown").html('');
                $.ajax({
                    url: "<?php echo e(url('api/process-request')); ?>",
                    type: "GET",
                    data: {
                        cat: cat,
                        _token: '<?php echo e(csrf_token()); ?>'
                    },
                    dataType: 'json',
                    success: function(result) {
                        console.log(result)


                        $('#state-dropdown').html(
                            '<option value="">-- Select Service --</option>');
                        $.each(result.services, function(key, value) {
                            $("#state-dropdown").append('<option value="' + value
                                .id + '">' + value.name + '</option>');
                        });

                        $('#city-dropdown').html('<option value="">-- Amount --</option>');
                    }
                });
            });


            /*------------------------------------------
             --------------------------------------------
             State Dropdown Change Event
             --------------------------------------------
             --------------------------------------------*/
            $('#state-dropdown').on('change', function() {
                var cat = this.value;
                $("#city-dropdown").html('');
                $.ajax({
                    url: "<?php echo e(url('api/process-info')); ?>",
                    type: "GET",
                    data: {
                        cat: cat,
                        _token: '<?php echo e(csrf_token()); ?>'
                    },
                    dataType: 'json',
                    success: function(res) {
                        console.log(res)
                        $.each(res.services, function(key, value) {
                            document.getElementById('price').innerHTML = value
                                .price_per_k;
                            document.getElementById('min').innerHTML = value.min;
                            document.getElementById('max').innerHTML = value.max;
                            document.getElementById('details').innerHTML = value.name;


                            const price2 = document.getElementById('price').value =
                                value.price_per_k;
                            const min2 = document.getElementById('min2').value = value
                                .min;


                        });


                    }
                });
            });

        });
    </script>


    <script>
        $('input').keyup(function() { // run anytime the value changes

            var num1 = document.getElementById('num1').value; // convert it to a float
            var rate = document.getElementById('price').value; // convert it to a float

            var result = document.getElementById('result2').value = Number(num1) * Number(rate) / 1000;

            console.log(result);
            console.log(num1);
            console.log(rate);



        });
    </script>

    <script>
        (function($) {
            "use strict";

            $('.detailsBtn').on('click', function() {
                var modal = $('#detailsModal');
                var details = $(this).data('details');
                modal.find('#details').html(details);
                modal.modal('show');
            });

            $('.orderBtn').on('click', function() {
                var modal = $('#orderModal');
                $('.resetForm').trigger('reset');
                var url = $(this).data('url');
                var pricePerK = parseFloat($(this).data('price_per_k'));
                var min = $(this).data('min');
                var max = $(this).data('max');
                let apiProviderId = $(this).data('api_provider_id');
                //Calculate total price
                $(document).on("keyup", "#quantity", function() {
                    var quantity = parseInt($('#quantity').val());
                    var totalPrice = parseFloat((pricePerK / 1000) * quantity);
                    modal.find('input[name=price]').val("<?php echo e($general->cur_sym); ?>" + totalPrice
                        .toFixed(2));
                });

                modal.find('form').attr('action', url);
                modal.find('input[name=quantity]').attr('min', min).attr('max', max);
                modal.find('input[name=min]').val(min);
                modal.find('input[name=max]').val(max);
                modal.find('input[name=api_provider_id]').val(apiProviderId)
                modal.modal('show');
            });

            //Scroll to paginate position
            var pathName = document.location.pathname;
            window.onbeforeunload = function() {
                var scrollPosition = $(document).scrollTop();
                sessionStorage.setItem("scrollPosition_" + pathName, scrollPosition.toString());
            }
            if (sessionStorage["scrollPosition_" + pathName]) {
                $(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
            }
        })(jQuery);
    </script>



<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/project/aceboost/core/resources/views/templates/basic/user/dashboard.blade.php ENDPATH**/ ?>
@extends('layout.dashboard')
@section('content')

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

                                            <a href="#" style="color: white; font-size: 13px;" class="btn btn-dark btn-lg my-3"><i class="fa fa-video"> </i> Watch how to fund your wallet</a>



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

                    <div class="p-4">
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        @if (session()->has('message'))
                            <div class="alert alert-success">
                                {{ session()->get('message') }}
                            </div>
                        @endif
                        @if (session()->has('error'))
                            <div class="alert alert-danger">
                                {{ session()->get('error') }}
                            </div>
                        @endif
                    </div>




                    <form action="{{ route('user.deposit.insert') }}" method="post">
                        @csrf



                        <input type="hidden" name="method_code">
                        <input type="hidden" name="currency">
                        <div class="card2">
                            <div class="card-header">
                                <h5 class="card-title">@lang('Fund Wallet')</h5>
                            </div>
                            <div class="card-body">

                                <div class="form-group">
                                    <label class="form-label">@lang('Payment Method')</label>
                                    <div class="input-group">
                                        <select type="number" step="any" name="gateway" class="form-control form--control" required >
                                            <option value="1">Instant Payment</option>
{{--                                            <option value="2">Manual Payment</option>--}}

                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">@lang('Amount')</label>
                                    <div class="input-group">
                                        <input type="number" step="any" name="amount"
                                            class="form-control form--control" value="{{ old('amount') }}"
                                            autocomplete="off" required placeholder="Enter amount to fund">
                                        <span class="input-group-text">{{ $general->cur_text }}</span>
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



            <div class="col-md-12 justify-content-center my-3">

                <div class="card2">
                    <div class="card-body">

                        <div class="services-list__table">
                            <div class="table-bg component_table">

                                <div class="table-wr table-responsive editor__component-wrapper ">
                                    <table class="table " id="service-table-59">
                                        <thead>
                                            <tr>


                                                <th>Trx ID</th>
                                                <th class="">@lang('Amount')</th>
                                                <th class="">@lang('Status')</th>
                                                <th>Date & Time </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse(@$deposits as $deposit)
                                                <tr>


                                                    <td style="font-size: 10px">{{$deposit->trx}}</td>
                                                    <td style="font-size: 10px" class="">

                                                        N {{ showAmount($deposit->amount + $deposit->charge) }}

                                                    </td>


                                                @if ($deposit->status == 2)
                                                        <td style="font-size: 10px" class="text-warning">
                                                                @lang('Pending')
                                                        </td>
                                                    @elseif($deposit->status == 1)

                                                        <td style="font-size: 10px" class="text-success">
                                                            @lang('Completed')
                                                        </td>

                                                    @elseif($deposit->status == 5)
                                                        <td style="font-size: 10px" class="text-success">
                                                            @lang('Completed')
                                                        </td>
                                                    @endif
                                                    <td style="font-size: 10px" >{{$deposit->created_at}}</td>

                                                </tr>
                                            @empty
                                                <tr>
                                                    <td colspan="100%" class="text-center">{{ __($emptyMessage) }}
                                                    </td>
                                                </tr>
                                            @endforelse
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            @if ($deposits->hasPages())
                                <div class="card-footer">
                                    {{ $deposits->links() }}
                                </div>
                            @endif
                        </div>
                    </div>


                </div>
            </div>
        </div>


    @endsection

    @push('breadcrumb-plugins')
        <x-back route="{{ route('user.deposit.history') }}" />
    @endpush

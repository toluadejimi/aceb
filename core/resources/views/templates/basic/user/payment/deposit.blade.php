@extends('layout.dashboard')
@section('content')

    <style>
        #myModal {
            z-index: 9999
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

                                            <p>Reach us by <a href="#">clicking here</a> or whatsapp +2347047492899
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



            <div class="col-md-12 justify-content-center my-5">



                <div class="card2">
                    <div class="card-body">

                        <div class="services-list__table">
                            <div class="table-bg component_table">

                                <div class="table-wr table-responsive editor__component-wrapper ">
                                    <table class="table " id="service-table-59">
                                        <thead>
                                            <tr>


                                                <th class="">@lang('Amount')</th>
                                                <th class="">@lang('Status')</th>
                                                <th class="">@lang('Action')</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            @forelse(@$deposits as $deposit)
                                                <tr>


                                                    <div class="modal fade" id="exampleModal{{ $deposit->id }}"
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
                                                                        @csrf

                                                                        <label class="">Transaction ID</label>

                                                                        <div>
                                                                            {{ $deposit->trx }}

                                                                        </div>


                                                                        <label class="my-3">Enter Session ID</label>
                                                                        <div>
                                                                            <input type="text" name="session_id" required
                                                                                class="form-control"
                                                                                placeholder="Enter session ID">

                                                                            <input type="text" hidden name="order_id"
                                                                                value="{{ $deposit->trx }}">

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




                                                    {{-- 

                                            <td>
                                                <span class="fw-bold"> <span
                                                        class="text-primary">{{ __($deposit->gateway?->name) }}</span>
                                                </span>
                                                <br>
                                                <small> {{ $deposit->trx }} </small>
                                            </td> --}}


                                                    {{-- <td class="text-center">
                                                {{ showDateTime($deposit->created_at) }}<br>{{ diffForHumans($deposit->created_at) }}
                                            </td> --}}

                                                    <td class="">

                                                        N {{ showAmount($deposit->amount + $deposit->charge) }}

                                                    </td>

                                                    <td>
                                                        @if ($deposit->status == 0)
                                                            <span class="badge badge-danger text-white">Pending</span>
                                                        @elseif($deposit->status == 1)
                                                            <span class="badge badge-danger text-white">Completed</span>
                                                        @elseif($deposit->status == 2)
                                                            <span class="badge badge-warning text-white">Pending</span>
                                                        @elseif($deposit->status == 5)
                                                            <span class="badge badge-danger text-white">Reslove
                                                                Completed</span>
                                                        @else()
                                                            <span class="badge badge-primary text-white">Refunded</span>
                                                        @endif
                                                    </td>



                                                    @if ($deposit->status == 2)
                                                        <td>
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal{{ $deposit->id }}"
                                                                class="btn btn-warning text-white">
                                                                <i class="las la-coin"></i>
                                                                @lang('Resolve')
                                                            </a>
                                                        </td>
                                                    @elseif($deposit->status == 1)
                                                        <td>
                                                            <a href="#" class="btn btn-success btn-sm text-white">
                                                                <i class="las la-bank"></i>
                                                                @lang('Completed')
                                                            </a>
                                                        </td>
                                                    @elseif($deposit->status == 5)
                                                        <td>
                                                            <a href="#" class="btn btn-success text-white btn-sm">
                                                                <i class="las la-bank"></i>
                                                                @lang('Reslove Completed')
                                                            </a>
                                                        </td>
                                                    @endif




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

@extends('layout.dashboard')
@section('content')
    <div class="wrapper-content">
        <div class="wrapper-content__header">

        </div>
        <div class="content-body default-height">
            <!-- row -->
            <div class="container-fluid">

                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/user/dashboard">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Order History</a></li>
                    </ol>
                </div>


                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All Orders</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pending</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Completed</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        <div class="row">
                            <div class="col-lg-12">


                                <div class="card b-radius--10 mb-4">
                                    <div class="card-body p-0">
                                        <div class="table-responsive--sm table-responsive">
                                            <table class="table table--light ">
                                                <thead>
                                                <tr>
                                                    <th>@lang('ID')</th>
                                                    <th>@lang('Category')</th>
                                                    <th>@lang('Service')</th>
                                                    <th>@lang('Link')</th>
                                                    <th>@lang('Quantity')</th>
                                                    <th>@lang('Counter')</th>
                                                    <th>@lang('Remains')</th>
                                                    <th>@lang('Date')</th>
                                                    <th>@lang('Status')</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @forelse ($orders as $item)
                                                    <tr>
                                                        <td>{{ $item->id }}</td>
                                                        <td class="break_line">{{ __($item->category->name ) ?? "service" }}</td>
                                                        <td class="break_line">
                                                            {{ __($item->service->name ?? "service" )  }}</td>
                                                        <td class="break_line"><a
                                                                href="{{ empty(parse_url($item->link, PHP_URL_SCHEME)) ? 'https://' : null }}{{ $item->link }}"
                                                                target="_blank">{{ $item->link }}</a></td>
                                                        <td>{{ $item->quantity ?? "0" }}</td>
                                                        <td>{{ $item->start_counter ?? "0" }}</td>
                                                        <td>{{ $item->remain ?? "0" }}</td>
                                                        <td>{{ showDateTime($item->created_at) ?? "date" }}</td>
                                                        <td>
                                                            @if($item->status == 0)
                                                                <span class="badge badge-danger light border-0">Pending</span>
                                                            @elseif($item->status == 1)
                                                                <span
                                                                    class="badge badge-danger light border-0">Processing</span>
                                                            @elseif($item->status == 2)
                                                                <span
                                                                    class="badge badge-success light border-0">Completed</span>
                                                            @elseif($item->status == 3)
                                                                <span class="badge badge-danger light border-0">Canceled</span>
                                                            @else()
                                                                <span class="badge badge-primary light border-0">Refunded</span>
                                                            @endif
                                                        </td>
                                                    </tr>
                                                @empty
                                                    <tr>
                                                        <td class="text-muted text-center"
                                                            colspan="100%">{{ __($emptyMessage) }}</td>
                                                    </tr>
                                                @endforelse
                                                </tbody>
                                            </table><!-- table end -->
                                        </div>
                                    </div>

                                    @if ($orders->hasPages())
                                        <div class="card-footer">
                                            {{ paginateLinks($orders) }}
                                        </div>
                                    @endif
                                </div><!-- card end -->

                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                        <div class="row">
                            <div class="col-lg-12">


                                <div class="card b-radius--10 mb-4">
                                    <div class="card-body p-0">
                                        <div class="table-responsive--sm table-responsive">
                                            <table class="table table--light ">
                                                <thead>
                                                <tr>
                                                    <th>@lang('ID')</th>
                                                    <th>@lang('Category')</th>
                                                    <th>@lang('Service')</th>
                                                    <th>@lang('Link')</th>
                                                    <th>@lang('Quantity')</th>
                                                    <th>@lang('Counter')</th>
                                                    <th>@lang('Remains')</th>
                                                    <th>@lang('Date')</th>
                                                    <th>@lang('Status')</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @forelse ($pending_orders as $item)
                                                    <tr>
                                                        <td>{{ $item->id }}</td>
                                                        <td class="break_line">{{ __($item->category->name ) ?? "service" }}</td>
                                                        <td class="break_line">
                                                            {{ __($item->service->name ?? "service" )  }}</td>
                                                        <td class="break_line"><a
                                                                href="{{ empty(parse_url($item->link, PHP_URL_SCHEME)) ? 'https://' : null }}{{ $item->link }}"
                                                                target="_blank">{{ $item->link }}</a></td>
                                                        <td>{{ $item->quantity ?? "0" }}</td>
                                                        <td>{{ $item->start_counter ?? "0" }}</td>
                                                        <td>{{ $item->remain ?? "0" }}</td>
                                                        <td>{{ showDateTime($item->created_at) ?? "date" }}</td>
                                                        <td>
                                                            @if($item->status == 0)
                                                                <span class="badge badge-danger light border-0">Pending</span>
                                                            @elseif($item->status == 1)
                                                                <span
                                                                    class="badge badge-danger light border-0">Processing</span>
                                                            @elseif($item->status == 2)
                                                                <span
                                                                    class="badge badge-success light border-0">Completed</span>
                                                            @elseif($item->status == 3)
                                                                <span class="badge badge-danger light border-0">Canceled</span>
                                                            @else()
                                                                <span class="badge badge-primary light border-0">Refunded</span>
                                                            @endif
                                                        </td>
                                                    </tr>
                                                @empty
                                                    <tr>
                                                        <td class="text-muted text-center"
                                                            colspan="100%">{{ __($emptyMessage) }}</td>
                                                    </tr>
                                                @endforelse
                                                </tbody>
                                            </table><!-- table end -->
                                        </div>
                                    </div>

                                    @if ($orders->hasPages())
                                        <div class="card-footer">
                                            {{ paginateLinks($orders) }}
                                        </div>
                                    @endif
                                </div><!-- card end -->

                            </div>
                        </div>

                    </div>


                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                        <div class="row">
                            <div class="col-lg-12">


                                <div class="card b-radius--10 mb-4">
                                    <div class="card-body p-0">
                                        <div class="table-responsive--sm table-responsive">
                                            <table class="table table--light ">
                                                <thead>
                                                <tr>
                                                    <th>@lang('ID')</th>
                                                    <th>@lang('Category')</th>
                                                    <th>@lang('Service')</th>
                                                    <th>@lang('Link')</th>
                                                    <th>@lang('Quantity')</th>
                                                    <th>@lang('Counter')</th>
                                                    <th>@lang('Remains')</th>
                                                    <th>@lang('Date')</th>
                                                    <th>@lang('Status')</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                @forelse ($completed_orders as $item)
                                                    <tr>
                                                        <td>{{ $item->id }}</td>
                                                        <td class="break_line">{{ __($item->category->name ) ?? "service" }}</td>
                                                        <td class="break_line">
                                                            {{ __($item->service->name ?? "service" )  }}</td>
                                                        <td class="break_line"><a
                                                                href="{{ empty(parse_url($item->link, PHP_URL_SCHEME)) ? 'https://' : null }}{{ $item->link }}"
                                                                target="_blank">{{ $item->link }}</a></td>
                                                        <td>{{ $item->quantity ?? "0" }}</td>
                                                        <td>{{ $item->start_counter ?? "0" }}</td>
                                                        <td>{{ $item->remain ?? "0" }}</td>
                                                        <td>{{ showDateTime($item->created_at) ?? "date" }}</td>
                                                        <td>
                                                            @if($item->status == 0)
                                                                <span class="badge badge-danger light border-0">Pending</span>
                                                            @elseif($item->status == 1)
                                                                <span
                                                                    class="badge badge-danger light border-0">Processing</span>
                                                            @elseif($item->status == 2)
                                                                <span
                                                                    class="badge badge-success light border-0">Completed</span>
                                                            @elseif($item->status == 3)
                                                                <span class="badge badge-danger light border-0">Canceled</span>
                                                            @else()
                                                                <span class="badge badge-primary light border-0">Refunded</span>
                                                            @endif
                                                        </td>
                                                    </tr>
                                                @empty
                                                    <tr>
                                                        <td class="text-muted text-center"
                                                            colspan="100%">{{ __($emptyMessage) }}</td>
                                                    </tr>
                                                @endforelse
                                                </tbody>
                                            </table><!-- table end -->
                                        </div>
                                    </div>

                                    @if ($orders->hasPages())
                                        <div class="card-footer">
                                            {{ paginateLinks($orders) }}
                                        </div>
                                    @endif
                                </div><!-- card end -->

                            </div>
                        </div>


                    </div>



                </div>



            </div>
        </div>

    </div>
@endsection



@push('breadcrumb-plugins')

    <x-search-form placeholder="Search here ..."/>

@endpush


@push('style')
    <style>
        .break_line {
            white-space: initial !important;
        }
    </style>
@endpush

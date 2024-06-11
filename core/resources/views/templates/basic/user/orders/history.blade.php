@extends('layout.dashboard')
@section('content')
    <div class="wrapper-content">
        <div class="wrapper-content__header">

        </div>
        <div class="content-body">


            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/user/dashboard">Dashboard</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Order History</a></li>
                </ol>
            </div>

            <div id="block_61">
                <div class="block-bg"></div>
                <div class="container-fluid">


                    <div class="row my-4">
                        <div class="col-xl-6 col-sm-6 ">
                            <div class="card2 card3">
                                <div class="card-body">

                                    <div style="float:left; margin-right: 20px; display:inline-block; clear:both;">
                                        <svg width="30" height="39" viewBox="0 0 44 34" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M40.4991 9.72207C40.3825 9.71429 40.2532 9.71429 40.1175 9.71429H34.7635C30.3786 9.71429 26.6277 12.8773 26.6277 17C26.6277 21.1228 30.3807 24.2857 34.7635 24.2857H40.1175C40.2532 24.2857 40.3825 24.2857 40.5034 24.278C41.4046 24.2282 42.2553 23.8799 42.897 23.2979C43.5387 22.716 43.9277 21.9402 43.9914 21.115C43.9999 20.9984 43.9999 20.8721 43.9999 20.7556V13.2445C43.9999 13.1279 43.9999 13.0016 43.9914 12.885C43.9277 12.0598 43.5387 11.284 42.897 10.7021C42.2553 10.1202 41.4046 9.77186 40.5034 9.72207M34.2949 18.9429C35.423 18.9429 36.3369 18.0725 36.3369 17C36.3369 15.9276 35.423 15.0572 34.2949 15.0572C33.1648 15.0572 32.2509 15.9276 32.2509 17C32.2509 18.0725 33.1648 18.9429 34.2949 18.9429Z"
                                                  fill="#145052"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M40.1131 27.2C40.1864 27.1973 40.2594 27.2105 40.3261 27.2385C40.3928 27.2665 40.4514 27.3085 40.497 27.3611C40.5427 27.4137 40.5741 27.4755 40.5889 27.5413C40.6036 27.6072 40.6011 27.6753 40.5817 27.7401C40.1577 29.1234 39.4813 30.3047 38.3978 31.2955C36.8096 32.7527 34.7974 33.3958 32.3123 33.7027C29.8951 34 26.8099 34 22.9127 34H18.4345C14.5372 34 11.45 34 9.03489 33.7027C6.54982 33.3958 4.53759 32.7507 2.94943 31.2975C1.3634 29.8423 0.659435 27.9985 0.324417 25.7215C2.52768e-07 23.5066 0 20.6798 0 17.1088V16.8912C0 13.3202 2.52768e-07 10.4914 0.324417 8.27657C0.659435 5.99954 1.3634 4.15577 2.94943 2.70057C4.53759 1.24731 6.54982 0.602286 9.03489 0.295314C11.4521 -8.68525e-08 14.5372 0 18.4345 0H22.9127C26.8099 0 29.8972 2.31607e-07 32.3123 0.297257C34.7974 0.604229 36.8096 1.24926 38.3978 2.70251C39.4813 3.69726 40.1577 4.87657 40.5817 6.25989C40.6011 6.32472 40.6036 6.39282 40.5889 6.45868C40.5741 6.52453 40.5427 6.58628 40.497 6.6389C40.4514 6.69152 40.3928 6.73353 40.3261 6.76152C40.2594 6.78952 40.1864 6.8027 40.1131 6.8H34.7613C28.7458 6.8 23.4449 11.152 23.4449 17C23.4449 22.848 28.7458 27.2 34.7613 27.2H40.1131ZM7.95138 7.77143C7.52962 7.77143 7.12512 7.92495 6.82689 8.19822C6.52865 8.47148 6.36111 8.84211 6.36111 9.22857C6.36111 9.61503 6.52865 9.98566 6.82689 10.2589C7.12512 10.5322 7.52962 10.6857 7.95138 10.6857H16.4329C16.8546 10.6857 17.2591 10.5322 17.5574 10.2589C17.8556 9.98566 18.0231 9.61503 18.0231 9.22857C18.0231 8.84211 17.8556 8.47148 17.5574 8.19822C17.2591 7.92495 16.8546 7.77143 16.4329 7.77143H7.95138Z"
                                                  fill="#145052"/>
                                        </svg>
                                    </div>

                                    <div>
                                        <h3>Balance</h3>
                                        <h4 class="text-muted">NGN {{number_format(Auth::user()->balance, 2)}}</h4>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-sm-6">
                            <div class="card2 card3">
                                <div class="card-body">
                                    <div style="float:left; margin-right: 20px; display:inline-block; clear:both;">
                                        <svg width="30" height="39" viewBox="0 0 30 39" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_81_5684)">
                                                <path
                                                    d="M21.3313 18.3025C21.7271 18.3025 21.925 18.5004 21.925 18.8962V20.0837C21.925 20.4796 21.7271 20.6775 21.3313 20.6775H13.0188C12.623 20.6775 12.425 20.4796 12.425 20.0837V18.8962C12.425 18.5004 12.623 18.3025 13.0188 18.3025H21.3313ZM21.3313 25.4275C21.7271 25.4275 21.925 25.6254 21.925 26.0212V27.2087C21.925 27.6046 21.7271 27.8025 21.3313 27.8025H13.0188C12.623 27.8025 12.425 27.6046 12.425 27.2087V26.0212C12.425 25.6254 12.623 25.4275 13.0188 25.4275H21.3313ZM7.60083 18.2283C7.60083 18.2283 7.68742 18.1417 7.8606 17.9685C8.03377 17.7953 8.36776 17.7087 8.86255 17.7087C9.35734 17.7087 9.77791 17.8819 10.1243 18.2283C10.4706 18.5746 10.6438 18.9952 10.6438 19.49C10.6438 19.9848 10.4706 20.4054 10.1243 20.7517C9.77791 21.0981 9.35734 21.2712 8.86255 21.2712C8.36776 21.2712 7.94718 21.0981 7.60083 20.7517C7.25448 20.4054 7.0813 19.9848 7.0813 19.49C7.0813 18.9952 7.25448 18.5746 7.60083 18.2283ZM7.60083 25.3533C7.60083 25.3533 7.68742 25.2667 7.8606 25.0935C8.03377 24.9203 8.36776 24.8337 8.86255 24.8337C9.35734 24.8337 9.77791 25.0069 10.1243 25.3533C10.4706 25.6996 10.6438 26.1202 10.6438 26.615C10.6438 27.1098 10.4706 27.5304 10.1243 27.8767C9.77791 28.2231 9.35734 28.3962 8.86255 28.3962C8.36776 28.3962 7.94718 28.2231 7.60083 27.8767C7.25448 27.5304 7.0813 27.1098 7.0813 26.615C7.0813 26.1202 7.25448 25.6996 7.60083 25.3533ZM25.4875 5.23999C26.4771 5.23999 27.3183 5.58635 28.011 6.27905C28.7037 6.97176 29.05 7.81291 29.05 8.80249V34.9275C29.05 35.9171 28.7037 36.7582 28.011 37.4509C27.3183 38.1436 26.4771 38.49 25.4875 38.49H4.11255C3.12297 38.49 2.28182 38.1436 1.58911 37.4509C0.896403 36.7582 0.550049 35.9171 0.550049 34.9275V8.80249C0.550049 7.81291 0.896403 6.97176 1.58911 6.27905C2.28182 5.58635 3.12297 5.23999 4.11255 5.23999H10.05C10.05 3.95353 10.5201 2.84025 11.4602 1.90015C12.4003 0.960041 13.5136 0.48999 14.8 0.48999C16.0865 0.48999 17.1998 0.960041 18.1399 1.90015C19.08 2.84025 19.55 3.95353 19.55 5.23999H25.4875ZM15.6536 4.38647C15.6536 4.38647 15.5979 4.33081 15.4866 4.21948C15.3752 4.10815 15.1464 4.05249 14.8 4.05249C14.4537 4.05249 14.1692 4.16382 13.9465 4.38647C13.7239 4.60913 13.6125 4.89363 13.6125 5.23999C13.6125 5.58635 13.7239 5.87085 13.9465 6.09351C14.1692 6.31616 14.4537 6.42749 14.8 6.42749C15.1464 6.42749 15.4309 6.31616 15.6536 6.09351C15.8762 5.87085 15.9875 5.58635 15.9875 5.23999C15.9875 4.89363 15.8762 4.60913 15.6536 4.38647ZM25.4875 34.3337V9.39624C25.4875 9.00041 25.2896 8.80249 24.8938 8.80249H21.925V11.1775C21.925 11.5238 21.8137 11.8083 21.5911 12.031C21.3684 12.2537 21.0839 12.365 20.7375 12.365H8.86255C8.51619 12.365 8.23169 12.2537 8.00903 12.031C7.78638 11.8083 7.67505 11.5238 7.67505 11.1775V8.80249H4.7063C4.31047 8.80249 4.11255 9.00041 4.11255 9.39624V34.3337C4.11255 34.7296 4.31047 34.9275 4.7063 34.9275H24.8938C25.2896 34.9275 25.4875 34.7296 25.4875 34.3337Z"
                                                    fill="#145052"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_81_5684">
                                                    <rect width="28.5" height="38" fill="white"
                                                          transform="matrix(1 0 0 -1 0.550049 38.49)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>

                                    <div>
                                        <h3>Purchased</h3>
                                        <h4 class="text-muted">NGN {{number_format($bought, 2)}}</h4>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="row my-4">
                        <div class="col-xl-6 col-sm-6 ">
                            <div class="card2 card3">
                                <div class="card-body">

                                    <div style="float:left; margin-right: 20px; display:inline-block; clear:both;">
                                        <svg width="30" height="39" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0312 3.25H12.0625C12.0625 2.40462 11.6872 1.59387 11.0191 0.996097C10.351 0.398325 9.44483 0.0625 8.5 0.0625C7.55517 0.0625 6.64903 0.398325 5.98093 0.996097C5.31283 1.59387 4.9375 2.40462 4.9375 3.25H1.96875C1.65381 3.25 1.35176 3.36194 1.12906 3.5612C0.906361 3.76046 0.78125 4.03071 0.78125 4.3125V12.2812C0.78125 12.563 0.906361 12.8333 1.12906 13.0326C1.35176 13.2318 1.65381 13.3438 1.96875 13.3438H15.0312C15.3462 13.3438 15.6482 13.2318 15.8709 13.0326C16.0936 12.8333 16.2188 12.563 16.2188 12.2812V4.3125C16.2188 4.03071 16.0936 3.76046 15.8709 3.5612C15.6482 3.36194 15.3462 3.25 15.0312 3.25ZM6.125 5.90625C6.125 6.04715 6.06244 6.18227 5.95109 6.2819C5.83974 6.38153 5.68872 6.4375 5.53125 6.4375C5.37378 6.4375 5.22276 6.38153 5.11141 6.2819C5.00006 6.18227 4.9375 6.04715 4.9375 5.90625V4.84375C4.9375 4.70285 5.00006 4.56773 5.11141 4.4681C5.22276 4.36847 5.37378 4.3125 5.53125 4.3125C5.68872 4.3125 5.83974 4.36847 5.95109 4.4681C6.06244 4.56773 6.125 4.70285 6.125 4.84375V5.90625ZM8.5 1.125C9.12989 1.125 9.73398 1.34888 10.1794 1.7474C10.6248 2.14591 10.875 2.68641 10.875 3.25H6.125C6.125 2.68641 6.37522 2.14591 6.82062 1.7474C7.26602 1.34888 7.87011 1.125 8.5 1.125ZM12.0625 5.90625C12.0625 6.04715 11.9999 6.18227 11.8886 6.2819C11.7772 6.38153 11.6262 6.4375 11.4688 6.4375C11.3113 6.4375 11.1603 6.38153 11.0489 6.2819C10.9376 6.18227 10.875 6.04715 10.875 5.90625V4.84375C10.875 4.70285 10.9376 4.56773 11.0489 4.4681C11.1603 4.36847 11.3113 4.3125 11.4688 4.3125C11.6262 4.3125 11.7772 4.36847 11.8886 4.4681C11.9999 4.56773 12.0625 4.70285 12.0625 4.84375V5.90625Z" fill="#145052"/>
                                        </svg>

                                    </div>

                                    <div>
                                        <h3>All Order</h3>
                                        <h4 class="text-muted">{{number_format($total_order, 2)}}</h4>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-sm-6">
                            <div class="card2 card3">
                                <div class="card-body">
                                    <div style="float:left; margin-right: 20px; display:inline-block; clear:both;">
                                        <svg width="30" height="39" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2031_8)">
                                                <path d="M7 0.375C3.37553 0.375 0.4375 2.8935 0.4375 6C0.4375 9.1065 3.37575 11.625 7 11.625C10.6243 11.625 13.5625 9.1065 13.5625 6C13.5625 2.8935 10.6243 0.375 7 0.375ZM5.47422 9.375L5.46984 9.37125L5.46613 9.375L2.40625 6.675L3.94384 5.33175L5.47006 6.67875L10.0638 2.62519L11.5938 3.97481L5.47422 9.375Z" fill="#145052"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2031_8">
                                                    <rect width="14" height="12" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>

                                    <div>
                                        <h3>Completed</h3>
                                        <h4 class="text-muted">{{number_format($completed_order, 2)}}</h4>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>



                    <div class="card2" style="max-width: 400px; overflow: scroll;">

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                        data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                        aria-selected="true">All Orders
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Pending
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                        type="button" role="tab" aria-controls="contact" aria-selected="false">Completed
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <div class="row">
                                    <div class="col-lg-12 col-sm-12">


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
                                                            <th>@lang('Remains')</th>
                                                            <th>@lang('Date')</th>
                                                            <th>@lang('Status')</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        @forelse ($orders as $item)
                                                            <tr>
                                                                <td>{{ $item->id }}</td>
                                                                <td style="font-size: 10px" class="break_line">{{ __($item->category->name ) ?? "service" }}</td>
                                                                <td style="font-size: 10px" class="break_line">
                                                                    {{ __($item->service->name ?? "service" )  }}</td>
                                                                <td style="font-size: 10px" class="break_line"><a
                                                                        href="{{ empty(parse_url($item->link, PHP_URL_SCHEME)) ? 'https://' : null }}{{ $item->link }}"
                                                                        target="_blank">{{ $item->link }}</a></td>
                                                                <td style="font-size: 10px" >{{ $item->quantity ?? "0" }}</td>
                                                                <td style="font-size: 10px">{{ $item->remain ?? "0" }}</td>
                                                                <td style="font-size: 10px">{{ showDateTime($item->created_at) ?? "date" }}</td>
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
                                                                        <span
                                                                            class="badge badge-primary light border-0">Refunded</span>
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
                                                                        <span
                                                                            class="badge badge-primary light border-0">Refunded</span>
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
                                                                        <span
                                                                            class="badge badge-primary light border-0">Refunded</span>
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

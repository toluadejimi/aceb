@extends($activeTemplate . 'layouts.mainuser')
@section('content')
    <!--**********************************
        Content body start
    ***********************************-->
    <div class="content-body  ">


        <div class="container-fluid">
            <div class="row">

                <div class="col-12 d-flex justify-content-start my-2">
                    <h6>
                        What will your like to do today <strong>{{Auth()->user()->username}}</strong>
                    </h6>

                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">

                                <svg width="58" height="57" viewBox="0 0 58 57" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="29" cy="28.5" rx="29" ry="28.5" fill="#49FF7C"/>
                                    <path d="M23 26.666H27.6667" stroke="#404341" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M40.3052 27.833H37.2695C35.187 27.833 33.5 29.3998 33.5 31.333C33.5 33.2662 35.1882 34.833 37.2683 34.833H40.3052C40.4032 34.833 40.451 34.833 40.4918 34.8307C41.1218 34.7922 41.6235 34.3267 41.6643 33.7422C41.6667 33.7048 41.6667 33.6593 41.6667 33.5695V29.0965C41.6667 29.0067 41.6667 28.9612 41.6643 28.9238C41.6223 28.3393 41.1218 27.8738 40.4918 27.8353C40.451 27.833 40.4032 27.833 40.3052 27.833Z"
                                          stroke="#404341" stroke-width="1.5"/>
                                    <path d="M40.4592 27.8333C40.3682 25.6493 40.0765 24.31 39.1327 23.3673C37.7665 22 35.5662 22 31.1667 22H27.6667C23.2672 22 21.0669 22 19.7007 23.3673C18.3334 24.7335 18.3334 26.9338 18.3334 31.3333C18.3334 35.7328 18.3334 37.9332 19.7007 39.2993C21.0669 40.6667 23.2672 40.6667 27.6667 40.6667H31.1667C35.5662 40.6667 37.7665 40.6667 39.1327 39.2993C40.0765 38.3567 40.3694 37.0173 40.4592 34.8333"
                                          stroke="#404341" stroke-width="1.5"/>
                                    <path d="M23 21.9996L27.3575 19.1098C27.9703 18.7112 28.6856 18.499 29.4167 18.499C30.1477 18.499 30.863 18.7112 31.4758 19.1098L35.8333 21.9996"
                                          stroke="#404341" stroke-width="1.5" stroke-linecap="round"/>
                                    <path d="M36.9895 31.333H36.9995" stroke="#404341" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <div class="total-projects ms-3">
                                    <h3 class="text-end text-success count">
                                        NGN {{number_format(Auth::user()->balance, 2)}}</h3>
                                    <span>Balance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="icon-box icon-box-lg bg-primary-light rounded-circle">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M32.8961 26.5849C34.1612 26.5849 35.223 27.629 35.0296 28.8783C33.8947 36.2283 27.6026 41.6855 20.0138 41.6855C11.6178 41.6855 4.8125 34.8803 4.8125 26.4862C4.8125 19.5704 10.0664 13.1283 15.9816 11.6717C17.2526 11.3579 18.5553 12.252 18.5553 13.5605C18.5553 22.4263 18.8533 24.7197 20.5368 25.9671C22.2204 27.2145 24.2 26.5849 32.8961 26.5849Z"
                                              stroke="var(--primary)" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M41.1733 19.2019C41.2739 13.5059 34.2772 4.32428 25.7509 4.48217C25.0877 4.49402 24.5568 5.04665 24.5272 5.70783C24.3121 10.3914 24.6022 16.4605 24.764 19.2118C24.8134 20.0684 25.4864 20.7414 26.341 20.7907C29.1693 20.9526 35.4594 21.1736 40.0759 20.4749C40.7035 20.3802 41.1634 19.8355 41.1733 19.2019Z"
                                              stroke="var(--primary)" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                    </svg>

                                </div>
                                <div class="total-projects ms-3">
                                    <h3 class="text-end text-primary count">{{number_format($total_spent, 2)}}</h3>
                                    <span>Total Spent</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="icon-box icon-box-lg bg-purple-light rounded-circle">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M22.9717 41.0539C22.9717 41.0539 37.3567 36.6983 37.3567 24.6908C37.3567 12.6814 37.878 11.7439 36.723 10.5889C35.5699 9.43391 24.858 5.69891 22.9717 5.69891C21.0855 5.69891 10.3736 9.43391 9.21863 10.5889C8.0655 11.7439 8.58675 12.6814 8.58675 24.6908C8.58675 36.6983 22.9717 41.0539 22.9717 41.0539Z"
                                              stroke="#BB6BD9" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path d="M26.4945 26.4642L19.4482 19.4179" stroke="#BB6BD9" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M19.4487 26.4642L26.495 19.4179" stroke="#BB6BD9" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <div class="total-projects ms-3">
                                    <h3 class="text-end text-purple count">{{number_format($completed_order, 2)}}</h3>
                                    <span>Completed Orders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="icon-box icon-box-lg bg-danger-light rounded-circle">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.0396 20.974C36.6552 20.6065 38.6689 18.364 38.6746 15.6471C38.6746 12.9696 36.7227 10.7496 34.1633 10.3296"
                                              stroke="#FF5E5E" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path d="M37.4912 27.262C40.0243 27.6407 41.7925 28.5276 41.7925 30.3557C41.7925 31.6139 40.96 32.4314 39.6137 32.9451"
                                              stroke="#FF5E5E" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M22.7879 28.0373C16.7616 28.0373 11.6147 28.9504 11.6147 32.5973C11.6147 36.2423 16.7297 37.1817 22.7879 37.1817C28.8141 37.1817 33.9591 36.2779 33.9591 32.6292C33.9591 28.9804 28.846 28.0373 22.7879 28.0373Z"
                                              stroke="#FF5E5E" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M22.7876 22.8325C26.742 22.8325 29.9483 19.6281 29.9483 15.6719C29.9483 11.7175 26.742 8.51123 22.7876 8.51123C18.8333 8.51123 15.627 11.7175 15.627 15.6719C15.612 19.6131 18.7939 22.8194 22.7351 22.8325H22.7876Z"
                                              stroke="#FF5E5E" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path d="M11.5344 20.974C8.91691 20.6065 6.90504 18.364 6.89941 15.6471C6.89941 12.9696 8.85129 10.7496 11.4107 10.3296"
                                              stroke="#FF5E5E" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                        <path d="M8.0825 27.262C5.54937 27.6407 3.78125 28.5276 3.78125 30.3557C3.78125 31.6139 4.61375 32.4314 5.96 32.9451"
                                              stroke="#FF5E5E" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <div class="total-projects ms-3">
                                    <h3 class="text-end text-danger count">{{number_format($pending_order, 2)}}</h3>
                                    <span>Pending Orders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body p-0">
                            <div class="table-responsive active-projects">
                                <div class="tbl-caption">
                                    <h4 class="heading mb-0">Recent Order</h4>
                                </div>
                                <table id="empoloyees-tbl3" class="table">
                                    <thead>
                                    <tr>
                                        <th>Trx</th>
                                        <th>Amount</th>
                                        <th>Qty</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>


                                    @forelse($orders as $data)
                                        <tr>
                                            <td>{{$data->id}}</td>
                                            <td>NGN {{number_format($data->price, 2)}}</td>
                                            <td>{{$data->quantity}}</td>
                                            <td>
                                                @if($data->status == 0)
                                                    <span class="badge badge-danger light border-0">Pending</span>
                                                @elseif($data->status == 1)
                                                    <span class="badge badge-danger light border-0">Processing</span>
                                                @elseif($data->status == 2)
                                                    <span class="badge badge-success light border-0">Completed</span>
                                                @elseif($data->status == 3)
                                                    <span class="badge badge-danger light border-0">Canceled</span>
                                                @else()
                                                    <span class="badge badge-primary light border-0">Refunded</span>
                                                @endif
                                            </td>


                                        </tr>
                                    @empty
                                        <td>No data Found</td>
                                    @endforelse


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>
    <!--**********************************
        Content body end
    ***********************************-->
@endsection

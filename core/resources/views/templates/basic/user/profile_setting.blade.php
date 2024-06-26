@extends('layout.dashboard')
@section('content')
    <div class="wrapper-content">
        <div class="wrapper-content__header">

        </div>
        <div class="content-body default-height">

            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/user/dashboard">Dashboard</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Profile</a></li>
                </ol>
            </div>

            <div class="container-fluid">
                <a href="{{ route('user.change.password') }}" class="btn btn-sm btn-outline-primary mb-3"><i
                        class="las la-key"></i>@lang('Update Password')</a>


                <div class="row mb-none-30">
                    <div class="col-xl-3 col-lg-4 mb-30">
                        <div class="card b-radius--5 overflow-hidden">
                            <div class="card-body p-0">

                                <ul class="list-group">

                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        @lang('username')
                                        <span class="fw-bold">{{ __($user->username) }}</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        @lang('Email')
                                        <span class="fw-bold">{{ $user->email }}</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-8 mb-30">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title  border-bottom">@lang('Profile Information')</h5>

                                <form action="" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    <div class="row">


                                        <div class="col-md-6">
                                            <div class="form-group ">
                                                <label>@lang('First Name')</label>
                                                <input class="form-control" type="text" name="firstname"
                                                       value="{{ $user->firstname }}" required>
                                            </div>

                                            <div class="form-group ">
                                                <label>@lang('Last Name')</label>
                                                <input class="form-control" type="text" name="lastname"
                                                       value="{{ $user->lastname }}"
                                                       required>
                                            </div>

                                            <div class="form-group">
                                                <label>@lang('Email')</label>
                                                <input class="form-control" type="email" name="email"
                                                       value="{{ $user->email }}"
                                                       required>
                                            </div>
                                            <div class="form-group">
                                                <label>@lang('Address')</label>
                                                <input type="text" class="form-control" name="address"
                                                       value="{{ $user->address->address }}">
                                            </div>
                                            <div class="form-group">
                                                <label>@lang('State')</label>
                                                <input type="text" class="form-control" name="state"
                                                       value="{{ $user->address->state }}">
                                            </div>
                                            <div class="form-group">
                                                <label>@lang('Zip Code')</label>
                                                <input type="text" class="form-control" name="zip"
                                                       value="{{ $user->address->zip }}">
                                            </div>

                                            <div class="form-group">
                                                <label>@lang('City')</label>
                                                <input type="text" class="form-control" name="city"
                                                       value="{{ $user->address->city }}">
                                            </div>

                                            <button type="submit"
                                                    class="btn btn-danager h-45 w-100 my-2">@lang('Submit')</button>

                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


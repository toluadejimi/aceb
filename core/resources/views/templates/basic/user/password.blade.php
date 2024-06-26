@extends('layout.dashboard')
@section('content')
    <div class="wrapper-content">
        <div class="wrapper-content__header">

        </div>
        <div class="content-body default-height">
            <div class="container-fluid">

                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/user/dashboard">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Change Password</a></li>
                    </ol>
                </div>


                <div class="row mb-none-30">
                    <div class="col-lg-3 col-md-3 mb-30">
                        <div class="card b-radius--5 overflow-hidden">
                            <div class="card-body p-0">

                                <ul class="list-group">

                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        @lang('Username')
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

                    <div class="col-lg-9 col-md-9 mb-30">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title border-bottom pb-2">@lang('Change Password')</h5>

                                <form action="" method="POST" enctype="multipart/form-data">
                                    @csrf

                                    <div class="form-group">
                                        <label>@lang('Password')</label>
                                        <input class="form-control" type="password" name="current_password" required>
                                    </div>

                                    <div class="form-group">
                                        <label>@lang('New Password')</label>
                                        <input class="form-control" type="password" name="password" required>
                                    </div>

                                    <div class="form-group">
                                        <label>@lang('Confirm Password')</label>
                                        <input class="form-control" type="password" name="password_confirmation"
                                               required>
                                    </div>
                                    <button type="submit"
                                            class="btn btn-danger w-100 btn-lg h-45">@lang('Submit')</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('user.profile.setting') }}" class="btn btn-sm btn-outline--primary"><i
            class="las la-user"></i>@lang('Profile Setting')</a>
@endpush

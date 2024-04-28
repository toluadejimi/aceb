@extends('layout.front')
@section('content')

    <div class="wrapper-content">
        <div class="wrapper-content__header">
        </div>
        <div class="wrapper-content__body">
            <!-- Main variables *content* -->
            <div id="block_39">
                <div class="block-bg"></div>
                <div class="container-fluid">
                    <div class="reset-password-form">
                        <div class="row reset-password-form__alignment">



                            <div class="col-lg-6">


                                @if ($errors->any())
                                    <div class="alert alert-danger mb-3">
                                        <ul>
                                            @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                @if (session()->has('message'))
                                    <div class="alert alert-success mb-3">
                                        {{ session()->get('message') }}
                                    </div>
                                @endif
                                @if (session()->has('error'))
                                    <div class="alert alert-danger mb-3">
                                        {{ session()->get('error') }}
                                    </div>
                                @endif



                                <div class="component_card">
                                    <div class="card2">
                                        <form method="POST" action="{{ route('user.password.update') }}">
                                            @csrf
                                            <div class="component_form_group">
                                                <div class="">

                                                        <input type="text" class="form-control" id="email"
                                                               hidden value="{{$email ?? "Email"}}" name="email">


                                                    <input type="text" class="form-control" id="email"
                                                           hidden value="{{$code ?? "Email"}}" name="code">

                                                    <div class="component_form_group">
                                                        <div class="">
                                                            <div class="form-group">
                                                                <label for="password" class="control-label">Password</label>
                                                                <input type="password" class="form-control" id="password"
                                                                       value="" name="password" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="component_form_group">
                                                        <div class="">
                                                            <div class="form-group">
                                                                <label for="password_again" class="control-label">Confirm
                                                                    password</label>
                                                                <input type="password" class="form-control"
                                                                       id="password_again" value=""
                                                                       name="password_confirmation" required">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <input type="hidden" name="_csrf"
                                                       value="Id7oGaeO1_8GTh_QTHvThBeI7zoO-7cTa_OJ1iJgX-V3m49Q_sKTx0wZSLk8EJ-ydLG_bEepzX0fgMewVQgIlA==">
                                                <div class="component_button_submit">
                                                    <div class="mt-3">
                                                        <button type="submit" class="btn btn-block btn-big-primary">
                                                            Reset Password
                                                        </button>
                                                    </div>
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
        </div>
@endsection

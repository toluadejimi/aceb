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


                                <div class="d-flex justify-content-center mt-4">
                                    <h1> FORGOT PASSWORD?</h1>
                                </div>
                                <div class="d-flex justify-content-center mt-2 mb-5">
                                    <p style="font-size: 17px; margin-top: 10px">&nbsp;Reset your password by entering your registered email address&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>



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
                                        <form method="POST" action="{{ route('user.password.email') }}">
                                            @csrf
                                            <div class="component_form_group">
                                                <div class="">
                                                    <div class="form-group">
                                                        <label for="email" class="control-label">Email</label>
                                                        <input type="email" class="form-control" id="email"
                                                               name="email">
                                                    </div>
                                                    <div class="g-recaptcha form-group"
                                                         data-sitekey="6LeF5rUaAAAAADYvG5QRSND25xaKUr_ba9EQ7PbY"></div>
                                                </div>
                                                <input type="hidden" name="_csrf"
                                                       value="Id7oGaeO1_8GTh_QTHvThBeI7zoO-7cTa_OJ1iJgX-V3m49Q_sKTx0wZSLk8EJ-ydLG_bEepzX0fgMewVQgIlA==">
                                                <div class="component_button_submit">
                                                    <div class="">
                                                        <button type="submit" class="btn btn-block btn-big-primary">
                                                            Send
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

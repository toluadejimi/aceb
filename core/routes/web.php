<?php

use App\Http\Controllers\Gateway\PaymentController;
use Illuminate\Support\Facades\Route;

Route::get('/clear', function () {
    \Illuminate\Support\Facades\Artisan::call('optimize:clear');
});


Route::get('makemanual', [PaymentController::class, 'makemanual'])->name('makemanual');




//Cron Controller
Route::get('cron', 'CronController@placeOrderToApi')->name('cron');
// User Support Ticket
Route::controller('TicketController')->prefix('ticket')->name('ticket.')->group(function () {
    Route::get('/', 'supportTicket')->name('index');
    Route::get('/new', 'openSupportTicket')->name('open');
    Route::post('/create', 'storeSupportTicket')->name('store');
    Route::get('/view/{ticket}', 'viewTicket')->name('view');
    Route::post('/reply/{ticket}', 'replyTicket')->name('reply');
    Route::post('/close/{ticket}', 'closeTicket')->name('close');
    Route::get('/download/{ticket}', 'ticketDownload')->name('download');
});

Route::get('app/deposit/confirm/{hash}', 'Gateway\PaymentController@appDepositConfirm')->name('deposit.app.confirm');

Route::controller('SiteController')->group(function () {
    Route::get('/service', 'service')->name('service');
    Route::post('/contact', 'contactSubmit');
    Route::get('/change/{lang?}', 'changeLanguage')->name('lang');

    Route::get('cookie-policy', 'cookiePolicy')->name('cookie.policy');

    Route::get('/cookie/accept', 'cookieAccept')->name('cookie.accept');

    Route::get('blog/{slug}/{id}', 'blogDetails')->name('blog.details');

    Route::get('policy/{slug}/{id}', 'policyPages')->name('policy.pages');

    Route::get('placeholder-image/{size}', 'placeholderImage')->name('placeholder.image');
    Route::post('subscribe', 'subscribe')->name('subscribe');
    Route::get('/api', 'apiDocumentation')->name('api.documentation');
    Route::get('/blog', 'blog')->name('blog');


    Route::get('/{slug}', 'pages')->name('pages');
    Route::get('/', 'index')->name('home');

});

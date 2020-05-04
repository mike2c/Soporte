<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login')->middleware("cors");
    Route::post('signup', 'AuthController@signup')->middleware("cors");
  
    Route::group(['middleware' => ['auth:api', 'cors']], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::get('token', function(){
    return csrf_token();
});

Route::view('/{path?}', 'app');
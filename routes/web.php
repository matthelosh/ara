<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::group(['prefix' => 'auth'], function(){
    Route::get('/login', function(){
        return Inertia::render('Auth/Login');
    })->name('auth.login');
});

Route::group(['prefix' => 'admin'], function() {
    Route::get('/', [DashController::class, 'admin'])->name('welcome');
});

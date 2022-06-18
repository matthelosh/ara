<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
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
Route::prefix('info')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('info.index');
    Route::get('/{slug}', [FrontController::class, 'read'])->name('info.read');
});


Route::get('/login', function(){
    if (!auth()->check())
        return Inertia::render('Auth/Login');
    else return to_route('admin.home');
})->name('login');

Route::middleware('auth')->group(function() {
    
    // Admin Route
    Route::prefix('admin')->group(function() {
        Route::get('/', [DashController::class, 'admin'])->name('admin.home');
    });
});

Route::group(['prefix' => 'error'], function() {
    Route::get('403', [ErrorController::class, 'index'])->name('error.403');
});

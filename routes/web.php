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

Route::get('/', [FrontController::class, 'index'])->name('welcome');
Route::prefix('post')->group(function() {
    Route::post('/', [PostController::class, 'index'])->name('post.index');
});
Route::prefix('berita')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('berita');
    Route::post('/', [PostController::class, 'berita'])->name('berita.index');
    Route::get('/{slug}', [FrontController::class, 'index'])->name('baca');
    Route::post('/{slug}', [PostController::class, 'berita'])->name('baca.berita');
});
Route::prefix('pengumuman')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('pengumuman');
    Route::post('/', [PostController::class, 'pengumuman'])->name('pengumuman.index');
    Route::get('/{slug}', [FrontController::class, 'index'])->name('baca');
    Route::post('/{slug}', [PostController::class, 'pengumuman'])->name('baca.pengumuman');
    // Route::get('/{slug}', [FrontController::class, 'read'])->name('berita.read');
});

Route::prefix('profil')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('profil');
});
Route::prefix('info')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('info');
});
Route::prefix('galeri')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('galeri');
});
Route::prefix('ppdb')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('ppdb');
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

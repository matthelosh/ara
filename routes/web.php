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
// Route::get('/tes', [FrontController::class, 'index'])->name('tes');
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
Route::prefix('agenda')->group(function() {
    Route::post('/', [EventController::class, 'index'])->name('front.agenda');
});
Route::prefix('profil')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('profil');
});
Route::prefix('guru')->group(function() {
    Route::get('/', [FrontController::class, 'index'])->name('guru');
    Route::post('/', [GuruController::class, 'index'])->name('front.guru.index');
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
        Route::prefix('sekolah')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.sekolah');
        });
        Route::prefix('guru')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.guru');
            Route::post('/', [GuruController::class, 'index'])->name('admin.guru.index');
            Route::post('/import', [GuruController::class, 'import'])->name('admin.guru.import');
            Route::post('/store', [GuruController::class, 'store'])->name('admin.guru.store');
            Route::delete('/{id}', [GuruController::class, 'destroy'])->name('admin.guru.destroy');
        });
        Route::prefix('siswa')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.siswa');
        });
        Route::prefix('user')->group(function() {
            Route::post('/assign-account-guru', [UserController::class, 'assignAccountGuru'])->name('admin.user.asignaccount.guru');
            Route::post('/assign-account-siswa', [UserController::class, 'assignAccountSiswa'])->name('admin.user.asignaccount.siswa');
        });
        Route::prefix('rombel')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.rombel');
        });
        Route::prefix('post')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.post');
            Route::post('/', [PostController::class, 'index'])->name('admin.post.index');
            Route::post('/create', [PostController::class, 'store'])->name('admin.post.store');
            Route::post('/upload-image', [PostController::class, 'uploadPostImage'])->name('admin.post.uploadImage');
            Route::delete('/{id}', [PostController::class, 'destroy'])->name('admin.post.destroy');
        });
        Route::prefix('agenda')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.agenda');
            Route::post('/', [EventController::class, 'index'])->name('admin.event.index');
            Route::post('/store', [EventController::class, 'store'])->name('admin.event.store');
        });
        Route::prefix('galeri')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.galeri');
            Route::post('/', [GaleriController::class, 'index'])->name('admin.galeri.index');
            Route::post('/add-image', [GaleriController::class, 'addImage'])->name('admin.galeri.add-image');
            Route::post('/add-album', [GaleriController::class, 'addAlbum'])->name('admin.galeri.add-album');
        });
        Route::prefix('video')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.video');
        });
        Route::prefix('surat')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.surat');
        });

        // Background Route
        Route::prefix('category')->group(function() {
            Route::post('/', [CategoryController::class, 'index'])->name('admin.category');
        });
    });
});

Route::group(['prefix' => 'error'], function() {
    Route::get('403', [ErrorController::class, 'index'])->name('error.403');
});

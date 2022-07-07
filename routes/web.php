<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [FrontController::class, 'index'])->name('index');
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
Route::prefix('video')->group(function() {
    Route::post('/', [VideoController::class, 'index'])->name('front.video');
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
    Route::post('/', [GaleriController::class, 'index'])->name('galeri.index');
    
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
        Route::prefix('sekolah')->middleware('role:admin')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.sekolah');
            Route::post('/logo/store', [SekolahController::class, 'storeLogo'])->name('admin.sekolah.logo.store');
            Route::put('/', [SekolahController::class, 'update'])->name('admin.sekolah.update');
            Route::put('/{id}', [SekolahController::class, 'changeKepsek'])->name('admin.sekolah.change-kepsek');
        });
        Route::prefix('guru')->middleware('role:admin')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.guru');
            Route::post('/', [GuruController::class, 'index'])->name('admin.guru.index');
            Route::post('/import', [GuruController::class, 'import'])->name('admin.guru.import');
            Route::post('/store', [GuruController::class, 'store'])->name('admin.guru.store');
            Route::delete('/{id}', [GuruController::class, 'destroy'])->name('admin.guru.destroy');
        });
        Route::prefix('siswa')->middleware('role:admin')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.siswa');
            Route::post('/', [SiswaController::class, 'index'])->name('admin.siswa.index');
            Route::post('/store', [SiswaController::class, 'store'])->name('admin.siswa.store');
            Route::post('/import', [SiswaController::class, 'import'])->name('admin.siswa.import');
        });
        Route::prefix('user')->middleware('role:admin')->group(function() {
            Route::post('/assign-account-guru', [UserController::class, 'assignAccountGuru'])->name('admin.user.asignaccount.guru');
            Route::post('/assign-account-siswa', [UserController::class, 'assignAccountSiswa'])->name('admin.user.asignaccount.siswa');
        });
        Route::prefix('rombel')->middleware('role:admin')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.rombel');
            Route::post('/', [RombelController::class, 'index'])->name('admin.rombel.index');
            Route::post('/store', [RombelController::class, 'store'])->name('admin.rombel.store');
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
            Route::delete('/{id}', [EventController::class, 'destroy'])->name('admin.event.destroy');
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
        Route::prefix('surat')->middleware('role:admin')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.surat');
            Route::prefix('masuk')->group(function() {
                Route::get('/', [DashController::class, 'admin'])->name('admin.inmail');
            });
            Route::prefix('keluar')->group(function() {
                Route::get('/', [DashController::class, 'admin'])->name('admin.outmail');
            });
        });

        Route::prefix('settings')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.setting');
        });
        Route::prefix('tools')->group(function() {
            Route::get('/', [DashController::class, 'admin'])->name('admin.tools');
        });

        // Background Route
        Route::prefix('category')->group(function() {
            Route::post('/', [CategoryController::class, 'index'])->name('admin.category');
        });
    });
});

Route::group(['prefix' => 'error'], function() {
    Route::get('403', function() {
        return Inertia::render('Errors/403');
    })->name('error.403');
});

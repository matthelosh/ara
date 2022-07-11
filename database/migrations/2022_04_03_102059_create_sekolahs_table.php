<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sekolahs', function (Blueprint $table) {
            $table->id();
            $table->string('ks', 40);
            $table->string('nama', 100);
            $table->string('kode_lembaga', 50);
            $table->string('nss', 30);
            $table->string('npsn', 10);
            $table->string('status_sekolah_str', 30);
            $table->string('alamat_jalan', 100)->nullable();
            $table->string('rt', 3);
            $table->string('rw', 3);
            $table->string('kode_pos', 6);
            $table->string('nomor_telepon', 20)->nullable();
            $table->string('email', 191);
            $table->string('website', 191)->nullable();
            $table->string('dusun', 191);
            $table->string('desa_kelurahan', 100);
            $table->string('kecamatan', 100);
            $table->string('kabupaten_kota', 100);
            $table->string('provinsi', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sekolahs');
    }
};

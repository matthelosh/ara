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
        Schema::table('sekolahs', function (Blueprint $table) {
            $table->string('visi', 191)->default('Ganti Dengan Visi Sekolah');
            $table->text('misi')->default('Ganti dengan Misi Sekolah');
            $table->text('tujuan')->default('<p>Ganti Dengan Tujuan Sekolah: <ol><li>Misi Satu</li><li>Misi Dua</li><li>Dst.</li></p>');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sekolahs', function (Blueprint $table) {
            //
        });
    }
};

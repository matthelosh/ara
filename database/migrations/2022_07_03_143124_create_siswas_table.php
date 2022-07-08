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
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->string('nisn', 12)->unique();
            $table->string('nis', 12)->unique()->nullable();
            $table->string('nik', 20)->nullable();
            $table->string('no_akta', 120)->nullable();
            $table->string('no_kip', 60)->nullable();
            $table->string('no_kk', 30)->nullable();
            $table->string('nama', 100);
            $table->enum('jk', ['l','p']);
            $table->string('tempat_lahir', 100)->default('Malang');
            $table->date('tanggal_lahir');
            $table->string('alamat', 100);
            $table->string('rt', 3)->nullable();
            $table->string('rw', 3)->nullable();
            $table->string('desa', 100)->default('Dalisodo');
            $table->string('kecamatan', 100)->default('Wagir');
            $table->string('kode_pos', 5)->default('65158');
            $table->string('kabupaten', 60)->default('Malang');
            $table->string('provinsi', 60)->default('Jawa Timur');
            $table->string('hp', 15)->nullable();
            $table->string('email', 150)->nullable();
            $table->boolean('is_active')->default(1);
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
        Schema::dropIfExists('siswas');
    }
};

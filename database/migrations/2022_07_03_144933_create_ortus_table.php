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
        Schema::create('ortus', function (Blueprint $table) {
            $table->id();
            $table->string('no_kk', 40)->unique();
            $table->string('nama_ayah', 60);
            $table->string('nik_ayah', 20)->nullable();
            $table->string('profesi_ayah', 100)->default('Swasta');
            $table->enum('status_ayah',['Hidup','Meninggal'])->default('Hidup');
            $table->string('nama_ibu', 60);
            $table->string('nik_ibu', 20)->nullable();
            $table->string('profesi_ibu', 100)->default('Swasta');
            $table->enum('status_ibu',['Hidup','Meninggal'])->default('Hidup');
            $table->string('nama_wali', 60);
            $table->string('nik_wali', 20)->nullable();
            $table->string('profesi_wali', 100)->default('Swasta');
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
        Schema::dropIfExists('ortus');
    }
};

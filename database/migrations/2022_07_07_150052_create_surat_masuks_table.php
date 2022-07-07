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
        Schema::create('surat_masuks', function (Blueprint $table) {
            $table->id();
            $table->string('no_surat', 100)->unique();
            $table->date('tanggal_diterima');
            $table->string('pengirim', 191);
            $table->date('tanggal_surat');
            $table->string('perihal', 100);
            $table->string('sifat',50);
            $table->text('ringkasan');
            $table->string('file_surat', 191)->nullable();
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
        Schema::dropIfExists('surat_masuks');
    }
};

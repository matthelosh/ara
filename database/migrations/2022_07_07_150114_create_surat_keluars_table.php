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
        Schema::create('surat_keluars', function (Blueprint $table) {
            $table->id();
            $table->string('no_surat', 100)->unique();
            $table->string('klasifikasi_id', 10);
            $table->date('tanggal_surat');
            $table->string('jenis', 50);
            $table->string('tipe', 50);
            $table->string('sifat', 50);
            $table->enum('lingkup', ['Internal','Eksternal']);
            $table->string('penerima', 50);
            $table->string('alamat', 100);
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
        Schema::dropIfExists('surat_keluars');
    }
};

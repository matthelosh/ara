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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('user_id', 100);
            $table->string('title', 191)->unique();
            $table->string('slug', 191)->unique();
            $table->integer('category_id')->default(0);
            $table->string('tags', 191)->nullable();
            $table->text('content');
            $table->integer('views')->default(0);
            $table->integer('shared')->default(0);
            $table->integer('liked')->default(0);
            $table->string('featuredImage', 191)->nullable();
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
        Schema::dropIfExists('posts');
    }
};

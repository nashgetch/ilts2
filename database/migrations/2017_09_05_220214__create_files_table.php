<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->increments('id');
            $table->string('to_email');
            $table->string('from');
            $table->string('letter_header');
            $table->binary('letter_desc');
            $table->string('filename');
            $table->string('mime');
            $table->string('original_filename');
            $table->boolean('approved')->default('0');
            $table->boolean('seen')->default('0');
            $table->boolean('important')->default('0');
            $table->string('intended_to');
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
        Schema::dropIfExists('files');
    }

}

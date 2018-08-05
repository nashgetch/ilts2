<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableModules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->create('modules', function($table){
            $table->increments('id');
            $table->string('course_id');
            $table->string('chapter_name')->nullable();
            $table->string('chapter_no');
            $table->binary('description')->nullable();
            $table->string('filename')->nullable();
            $table->string('mime')->nullable();
            $table->string('filename2')->nullable();
            $table->string('mime2')->nullable();

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
        //
    }
}

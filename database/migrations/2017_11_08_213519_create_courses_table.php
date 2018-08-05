<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
           // $table->foreign('module_id')->references('module_id')->on('modules')->onDelete('CASCADE')->onUpdate('CASCADE');
           // $table->foreign('author_id')->references('author_id')->on('authors')->onDelete('CASCADE')->onUpdate('CASCADE');
            $table->string('course_name');
            $table->string('belongs_to_dept');
            $table->unsignedInteger('no_of_modules');
            $table->text('desc');
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
        Schema::dropIfExists('courses');
    }
}

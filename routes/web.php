<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/',function(){
   return view('layout');
});
//Code Runner Routes

Route::post('arduino/run','arduinoController@index');
Route::post('java/run','codeController@index');
Route::post('cpp/run','CppController@index');
Route::post('arduino/exit','arduinoController@exit');
// User Login Controller Routes

Route::resource('user', 'SessionController');
Route::post('login','SessionController@store');
Route::post('register','RegisterController@store');
Route::post('/upload','testController@store');
Route::get('destroy','RegisterController@destroy');
Route::resource('createDepartment','DepartmentsController');
Route::resource('createPositions','PositionsController');

//AA Tracking Routes

Route::post('letter/compose','LettersController@add');
Route::get('letter/inbox', 'LettersController@index');
Route::get('letter/inbox/{id}', 'LettersController@emailView');
Route::get('letter/inbox/file/{filename}', 'LettersController@get');
Route::get('modulesOfCourse/file/{filename}', 'ModulesController@get');
Route::post('letter/inbox/file/{id}/{filename}/approve', 'LettersController@approve');

//Course Resource Routes

Route::post('admin/createCourse','CourseCreateController@store');
Route::get('admin/courses', 'CourseCreateController@index');
Route::get('admin/courses/{id}', 'CourseCreateController@courseView');
Route::post('admin/courses/{id}/enroll', 'EnrollmentController@store');
Route::get('/modulesOfCourse/{id}', 'ModulesController@index');
Route::post('admin/createModules/{id}', 'ModulesController@store');
Route::get('/enrolled_in', 'EnrollmentController@index');
//Draft Routes

Route::post('letter/compose/draft','DraftsController@add');
Route::post('student/enroll','EnrollmentController@store');
Route::get('letter/draft', 'DraftsController@index');
Route::get('letter/draft/{id}', 'DraftsController@draftView');

//Approved Routes

Route::get('letter/approved', 'LettersController@approvedLetters');
Route::get('letter/approved/{id}', 'LettersController@approvedView');

//Sent Letters

Route::get('letter/sent', 'LettersController@sentLetters');
Route::get('letter/sent/{id}', 'LettersController@sentView');
Route::post('letter/delete/{id}/{filename}', 'LettersController@deleteFile');
Route::get('chat_rooms', 'MessagesController@getAll');

// Post in Forum

Route::get('/admin/forum/posts/{id}', 'PostsController@index');
Route::get('/admin/forum/comment/{id}', 'PostsController@comment');
Route::get('/forum/post/{id}/single', 'PostsController@posts');
Route::post('/admin/createPost/{id}', 'PostsController@store');
Route::post('/admin/comment/{id}', 'PostsController@addComment');
Route::get('/admin/grade/{id}', 'GradeController@index');

// Quiz Controller Routes

Route::post('/createQuiz', 'QuizzesController@store');
Route::get('quiz/{course_name}/{chapter_no}', 'QuizzesController@index');
Route::post('checkAnswer/{id}', 'QuizzesController@checkAnswer');

// Grade Controllers
Route::get('/viewEnrolled/{id}', 'GradeController@enrolledSt');
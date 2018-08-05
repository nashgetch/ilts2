<?php

namespace App\Http\Controllers;

use App\Course;
use App\Module;
use App\User;
use Illuminate\Support\Facades\DB;
use Schema;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;
class ModulesController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    public function index($id)
    {
        $modules = Module::latest()
            ->where('course_id', $id)
            ->get();
        return $modules;
    }
    public function store($id){
        $file = Request::file('file_field');
        $entry = new Module();
       if($file!== null) {
            $entry->course_id = $id;
            $entry->chapter_name = request('chapter_name');
            $entry->chapter_no = request('chapter_no');
            $extension = $file->getClientOriginalExtension();
            Storage::disk('local')->put($file->getFilename() . '.' . $extension, File::get($file));
            $entry->description = request('description');
            $entry->filename = $file->getFilename() . '.' . $extension;
            $entry->mime = $file->getClientMimeType();
            $entry->save();
            return response($file, 201);
        }
        else{
            return response('No file sent');
        }
    }
    public function get($filename)
    {
        $entry = Module::where('filename', '=', $filename)->firstOrFail();
        $file = Storage::disk('local')->get($entry->filename);
        return (new Response($file, 200))
            ->header('Content-Type', $entry->mime,
                'Content-Disposition', 'inline; filename = "'.$filename.'"');
    }
}

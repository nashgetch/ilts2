<?php

namespace App\Http\Controllers;

use Request;
use App\Http\Controllers\Controller;
use App\Draft;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
class DraftsController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function draftView($id)
    {
        $letter = Draft::find($id);
        return $letter;
    }

    public function index()
    {
        $inbox = Draft::latest()
            ->where('from', Auth::user()->email)
            ->orWhere('from', Auth::user()->name)
            ->get();
        return $inbox;
    }
    public function add(Request $request)
    {
        $file = Request::file('file_field');

        if($file == null) {
            $entry = new Draft();
            $entry->to_email = request('to_email');
            $entry->from = Auth::user()->name;
            $entry->letter_header = request('letter_header');
            $entry->letter_desc = request('letter_desc');
            $entry->filename = null;
            $entry->mime = null;
            $entry->original_filename = null;
            $entry->save();
            return response($file);
        }
        else{
            $entry = new Draft();
            $extension = $file->getClientOriginalExtension();
            Storage::disk('local')->put($file->getFilename() . '.' . $extension, File::get($file));
            $entry->to_email = request('to_email');
            $entry->from = Auth::user()->name;
            $entry->letter_header = request('letter_header');
            $entry->letter_desc = request('letter_desc');
            $entry->filename = $file->getFilename() . '.' . $extension;
            $entry->mime = $file->getClientMimeType();
            $entry->original_filename = $file->getClientOriginalName();

            $entry->save();
            return response($file, 201);
        }

    }

    public function get($filename)
    {
        $entry = Draft::where('filename', '=', $filename)->firstOrFail();
        $file = Storage::disk('local')->get($entry->filename);
        return (new Response($file, 200))
            ->header('Content-Type', $entry->mime,
                'Content-Disposition', 'inline; filename = "'.$filename.'"');
    }
}

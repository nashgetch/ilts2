<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Files;
use Illuminate\Support\Facades\Auth;
use Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;
class LettersController extends Controller
{
  public function __construct(){
    $this->middleware('auth');
  }

  public function emailView($id)
  {
    $letter = Files::find($id);
      $letter->seen = 1;
      $letter->save();
      return $letter;
  }

  public function index()
  {
      $inbox = Files::latest()
          ->where('to_email', Auth::user()->email)
          ->orWhere('to_email', Auth::user()->name)
          ->get();
      return $inbox;
  }

  public function add(Request $request)
  {
		$file = Request::file('file_field');
    $entry = new Files();
    if($file!== null) {
        $entry->to_email = request('to_email');
        $entry->from = Auth::user()->name;
        $entry->letter_header = request('letter_header');
        $entry->letter_desc = request('letter_desc');
        $extension = $file->getClientOriginalExtension();
        Storage::disk('local')->put($file->getFilename() . '.' . $extension, File::get($file));
        $entry->filename = $file->getFilename() . '.' . $extension;
        $entry->mime = $file->getClientMimeType();
        $entry->original_filename = $file->getClientOriginalName();
        $entry->intended_to = request('intended_to');
        $entry->save();
        return response($file, 201);
    }
    else{
      return response('No file sent');
    }
  }

  public function get($filename)
  {
    $entry = Files::where('filename', '=', $filename)->firstOrFail();
    $file = Storage::disk('local')->get($entry->filename);
    return (new Response($file, 200))
        ->header('Content-Type', $entry->mime,
        'Content-Disposition', 'inline; filename = "'.$filename.'"');
  }
  public function approve($id, $filename){
    $letter = Files::find($id);
    $letter->approved = 1;
    $letter->save();
      $copy = $letter->replicate();
      $copy->to_email = $letter->intended_to;
      $copy->save();
    return 'The letter has been approved with letter header: '.$letter->letter_header;
  }
  public function approvedLetters()
  {
    $l = 1;
    $letters = Files::latest()
        ->where('from', Auth::user()->name)
        ->where('approved', $l)
        ->get();
    return response($letters, 201);
  }
    public function approvedView($id)
    {
        $letter = Files::find($id);
        return $letter;
    }
    public function sentView($id)
    {
        $letter = Files::find($id);
        return $letter;
    }
    public function sentLetters()
    {
        $sent = Files::latest()
            ->where('from', Auth::user()->email)
            ->orWhere('from', Auth::user()->name)
            ->get();
        return $sent;
    }
    public function deleteFile($id, $filename)
    {
        Storage::disk('local')->delete($filename);
        $letters = Files::find($id)->delete();
        return response('Letter deleted!', 201);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Image;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class GaleriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if (!$request->query('from')) {
                $albums = Album::orderBy('category', 'ASC')->orderBy('updated_at', 'DESC')->with('images')->get();
            } else {
                $albums = Image::orderBy('created_at', 'DESC')->with('album')->get();
            }
            return response()->json(['success' => true, 'albums' => $albums], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    public function addAlbum(Request $request)
    {
        try {
            Album::updateOrCreate(
                [
                    'id' => $request->id
                ],[
                    'name' => $request->name,
                    'category' => $request->category
                ]
            );
            return response()->json(['success' => true, 'msg' => 'Album Disimpan'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    public function addImage(Request $request)
    {
        try {
            $input = json_decode($request->imageData);
            $file = $request->file;
            $imagename = Str::random(16);
            $ext = $file->getClientOriginalExtension();
            $path = 'public/uploads/img/galeri';

            $file->storeAS($path, $imagename.'.'.$ext);
            Image::updateOrCreate(
                [
                    'id' => $input->id ?? null
                ],[
                    'album_id' => $input->album_id,
                    'title' => $input->title,
                    'description' => $input->description,
                    'url' => '/storage/uploads/img/galeri/'.$imagename.'.'.$ext
                ]
            );
            return response()->json(['success' => true, 'msg' => 'Gambar Disimpan'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy(Album $album)
    {
        //
    }
}

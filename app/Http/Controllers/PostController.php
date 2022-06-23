<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use phpDocumentor\Reflection\PseudoTypes\LowercaseString;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $posts = Post::with('category')->orderBy('created_at', 'DESC')->get();
            return response()->json(['success' => true, 'posts' => $posts], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    public function pengumuman(Request $request, $slug = null)
    {
        try {
            if (!$slug) {
                $posts = Post::where('category_id', 4)->orderBy('created_at','DESC')->get();
                return response()->json(['success' => true, 'posts' => $posts], 200);
            } else {
                $post = Post::where('category_id', 4)->where('slug', $slug)->first();
                return response()->json(['success' => true, 'post' => $post], 200);
            }

            
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'mdg' => $th->getMessage()], 500);
        }
    }
    public function berita(Request $request, $slug = null)
    {   
        // dd($slug);
        try {
            if (!$slug) {
                $posts = Post::where('category_id', '!=', 4)->orderBy('created_at','DESC')->get();
                return response()->json(['success' => true, 'posts' => $posts], 200);
            } else {
                $post = Post::where('category_id', '!=', 4)->where('slug', $slug)->first();
                return response()->json(['success' => true, 'post' => $post], 200);
            }

            
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'mdg' => $th->getMessage()], 500);
        }
    }

    public function uploadPostImage(Request $request)
    {
        try {
            $image = $request->file("image");
            $name = Str::random(32);
            $ext = $image->getClientOriginalExtension();
            // $save = Storage::putFileAs('/storage/uploads/img/posts',$image, $name.".jpg");
            $image->storeAs('public/uploads/img/posts', $name.'.'.$ext);
            return response()->json(['success' => true, 'url' => '/uploads/img/posts/'.$name.'.'.$ext], 200);
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'msg' => $th->getMessage()], 500);
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
        try {
            $featuredImage = $request->file("featuredImage") ?? null;
            $slug = str_replace(" ", "-",$request['title']);
            Post::create([
                'title' => $request['title'],
                'slug' => Str::lower($slug),
                'tags' => $request['tags'],
                'content' => $request['content'],
                'user_id' => $request['author_id'],
                'category_id' => $request['category_id']
            ]);
            return response()->json(['success' => true, 'msg' => 'Tulisan Disimpan'], 200);
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'msg' => $th->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}

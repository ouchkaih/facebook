<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        // get the post of user friends
        $posts = DB::table('posts')
            ->join('users' ,'users.id', "=", 'posts.userId' )
            ->join('friends', function ($join) {
                $join->on('friends.userId1', '=' , 'users.id')
                     ->orWhere('friends.userId2', '=' , 'users.id');
            })
            ->where('users.id' , "<>", Auth::user()->id)
            ->select('posts.*')
            ->get();


        // get the user posts
        $postsUser = DB::table('posts')
            ->join('users' ,'users.id', "=", 'posts.userId' )
            ->where('users.id' , "=",  Auth::user()->id)
            ->select('posts.*')
            ->get();

        // convert the two arrays
        foreach($postsUser as $post){
            $posts[]= $post;
        }


        return response()->json(
            [
                'posts' => $posts

            ], 200
        );

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validation =  Validator::make(
            $request->all(), [
                'title' => 'string|required|max:255',
                'description'=> 'string|required|max:300',
                'picture' => 'required|image|mimes:png,jpg,gif,jpeg,svg'
            ]

        );

        if($validation->fails()){
            return response()->json(
                [
                    'success'=> false,
                    'errors' =>$validation->errors()
                ], 400
            );
        }

        if($request->hasFile('picture')){
            $image = $request->file('picture');
            if($image->isValid()){
                $imagePath = $image->getClientOriginalName();
                $image->move('D:\New folder\New folder\New folder\programming\Projects\facebook\frontend\public\images\posts', $imagePath);
            }else {
                return response()->json(['error' => 'Invalid file'], 400);
            }
        } else {
            return response()->json(['error' => 'No image uploaded', 'picture' => $request->picture], 400);
        }

        $data = $request->all();
        $data['picture'] = $imagePath;
        $data['userId'] = Auth::user()->id;
        Post::create($data);
        return response()->json(
            [
                'success' => true
            ], 200
        );


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

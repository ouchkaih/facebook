<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $likes = Like::all();
        return response()->json(
            ['likes' => $likes]
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
        $validation = Validator::make($request->all(), [
            'postId' => 'required|exists:posts,id'
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => $validation->error
            ], 400);
        }
       
        // check if the post already liked by the user
        $post = DB::table('likes')
            ->where('likes.userId' , Auth::user()->id)
            ->where('likes.postId', $request->input('postId'))
            ->get();

        if(!sizeOf($post)){
            $data["postId"] = $request->input('postId');
            $data['userId']=  Auth::user()->id;
            Like::create($data);
        }

        return response()->json([
            'success'=> true
        ]);
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

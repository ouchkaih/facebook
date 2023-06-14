<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\Friend;


class FriendsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'userId2' => 'required|exists:users,id'
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => $validation->errors()
            ], 400);
        }

         // check if the the users already friends
        $friends = DB::table('friends')
            ->where('friends.userId1' , Auth::user()->id )
            ->where('friends.userId2', $request->input('userId2'))
            ->orWhere(function ($query) use ($request) {
                $query->where('friends.userId1', '=', $request->input('userId2') )
                    ->where('friends.userId2', '=', Auth::user()->id);
            })
            ->get();

        if(!sizeOf($friends)){
            $data['userId1']=  Auth::user()->id;
            $data["userId2"] = $request->input('userId2');
            Friend::create($data);
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

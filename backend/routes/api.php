<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\FriendsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth'])->group( function(){
    Route::resource('posts', PostsController::class );
    Route::get('users', [PostsController::class , 'getUsers']);
    Route::resource('likes', LikesController::class);
    Route::resource('friends', FriendsController::class);
});

// Route::resource('posts', PostsController::class )->middleware('auth');

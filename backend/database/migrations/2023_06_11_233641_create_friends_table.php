<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->id();
            $table->foreignId('userId1');
            $table->foreign('userId1')->references('id')->on('users')->onDelete('cascade')->onUpdate("cascade");
            $table->foreignId('userId2');
            $table->foreign('userId2')->references('id')->on('users')->onDelete('cascade')->onUpdate("cascade");
            $table->timestamp('dateAdded')->default(now());
            // this status is for the type of relation between the user1 and user2 (when someone sent requist)
            $table->boolean('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('friends');
    }
};

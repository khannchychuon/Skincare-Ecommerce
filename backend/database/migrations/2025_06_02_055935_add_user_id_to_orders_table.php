<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   
   public function up()
{
    Schema::table('orders', function (Blueprint $table) {
        $table->unsignedBigInteger('user_id')->after('id'); // or after the appropriate column
        // Add foreign key constraint if needed:
        // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
}

public function down()
{
    Schema::table('orders', function (Blueprint $table) {
        $table->dropColumn('user_id');
        // Drop foreign key if you added it
    });
}

};

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
        Schema::create('products', function (Blueprint $table) {
           $table->id();
            $table->string('name');
            $table->string('category');
            $table->string('image')->nullable();
            $table->string('brand')->nullable();
            $table->text('description')->nullable();
            $table->text('ingredients')->nullable();
            $table->text('how_to_use')->nullable();
            $table->decimal('price', 8, 2);
            $table->float('rating')->default(0);
            $table->integer('review_count')->default(0);
            $table->string('type')->nullable();  // For "Promotion", "Best Seller", "Trending"

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};

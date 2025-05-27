<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Product extends Model
{
    protected $fillable = [
        'name',
        'category',
        'image',
        'brand',
        'description',
        'ingredients',
        'how_to_use',
        'price',
        'rating',
        'review_count',
        'type',
    ];
}

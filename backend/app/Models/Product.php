<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Product extends Model
{
   protected $fillable = [
    'name',
    'category',
    'image',
    'image_2',
    'image_3',
    'image_4',
    'brand',
    'description',
    'ingredients',
    'how_to_use',
    'price',
    'rating',
    'review_count',
    'type',
    'stock',
];

}

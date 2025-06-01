<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
     use HasFactory;
    protected $fillable = [
       'user_id', 'note', 'address', 'payment_type', 'subtotal', 'shipping', 'total'
    ];
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}

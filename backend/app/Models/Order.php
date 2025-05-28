<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'note', 'address', 'payment_type', 'subtotal', 'shipping', 'total'
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

  
    protected $fillable = [
        'phone',
        'first_name',
        'last_name',
        'password',
        'role',
    'status',
    ];

    // Hide sensitive fields in JSON responses
    protected $hidden = [
        'password',
        'remember_token',
    ];
    public function isAdmin()
{
    return $this->role === 'admin';
}

    // Automatically hash password when it's set
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
    public function orders()
{
    return $this->hasMany(Order::class);
}

}

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

    // List all fields you expect to fill in mass assignment
    protected $fillable = [
        'phone',
        'first_name',
        'last_name',
        'password',
    ];

    // Hide sensitive fields in JSON responses
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Automatically hash password when it's set
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}

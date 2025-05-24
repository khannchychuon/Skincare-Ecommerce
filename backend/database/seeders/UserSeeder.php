<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => 'password123', // Will be hashed automatically
            'role' => 'admin',
            'status' => 'active',
        ]);

        User::create([
            'name' => 'Normal User',
            'email' => 'user@example.com',
            'password' => 'password123',
            'role' => 'user',
            'status' => 'active',
        ]);
    }
}

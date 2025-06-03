<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Http\Controllers\Controller;

class UserManagementController extends Controller
{
    // List all non-admin users
    public function index()
    {
        $users = User::where('is_admin', false)->latest()->get();

        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }
}

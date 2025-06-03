<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
   public function handle(Request $request, Closure $next): Response
{
    logger('User from middleware:', ['user' => $request->user()]);

    if ($request->user() && $request->user()->role === 'admin') {
        return $next($request);
    }

    return response()->json(['message' => 'Unauthorized. Admins only.'], 403);
}

}

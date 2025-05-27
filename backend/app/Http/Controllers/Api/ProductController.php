<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class ProductController extends Controller
{
    /**
     * Get products filtered by type, category, or brand with full image URLs.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
{
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    // Convert image path to full URL
    $product->image = URL::to('/storage/' . $product->image);

    return response()->json(['product' => $product]);
}

    public function filterProducts(Request $request)
    {
        $query = Product::query();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('brand')) {
            $query->where('brand', $request->brand);
        }

        $products = $query->get();

        // Convert image paths to full URLs
        $products->transform(function ($product) {
            $product->image = URL::to('/storage/' . $product->image);
            return $product;
        });

       return response()->json(['products' => $query->get()]);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class AdminProductController extends Controller
{
   public function index()
{
    return response()->json([
        'message' => 'Product list fetched successfully.',
        'products' => Product::all()
    ]);
}


    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'category' => 'nullable|string',
            'image' => 'nullable|string',
            'image_2' => 'nullable|string',
            'image_3' => 'nullable|string',
            'image_4' => 'nullable|string',
            'brand' => 'nullable|string',
            'description' => 'nullable|string',
            'ingredients' => 'nullable|string',
            'how_to_use' => 'nullable|string',
            'price' => 'required|numeric',
            'rating' => 'nullable|numeric',
            'review_count' => 'nullable|integer',
            'type' => 'nullable|string',
            'stock' => 'required|integer',
        ]);

        $product = Product::create($data);

        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $data = $request->validate([
            'name' => 'sometimes|required|string',
            'category' => 'nullable|string',
            'image' => 'nullable|string',
            'image_2' => 'nullable|string',
            'image_3' => 'nullable|string',
            'image_4' => 'nullable|string',
            'brand' => 'nullable|string',
            'description' => 'nullable|string',
            'ingredients' => 'nullable|string',
            'how_to_use' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'rating' => 'nullable|numeric',
            'review_count' => 'nullable|integer',
            'type' => 'nullable|string',
            'stock' => 'sometimes|required|integer',
        ]);

        $product->update($data);

        return response()->json($product);
    }

    public function destroy($id)
    {
        Product::findOrFail($id)->delete();

        return response()->json(['message' => 'Product deleted']);
    }
}

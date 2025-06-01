<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
   public function userOrders(Request $request)
{
    $orders = Order::where('user_id', $request->user()->id)
                   ->with('items.product') // optional if you want product info
                   ->get();

    return response()->json([
        'orders' => $orders
    ]);
}

    public function index()
    {
        $orders = auth()->user()->orders()->with('items.product')->latest()->get();
        return response()->json($orders);
    }
  public function store(Request $request)
{
    $validated = $request->validate([
        'note' => 'nullable|string',
        'address' => 'required|string',
        'paymentType' => 'required|string',
        'items' => 'required|array|min:1',
        'items.*.product_id' => 'required|exists:products,id',
        'items.*.name' => 'required|string',
        'items.*.image' => 'nullable|string',
        'items.*.price' => 'required|numeric',
        'items.*.quantity' => 'required|integer|min:1',
    ]);

    $subtotal = collect($validated['items'])->sum(fn ($item) => $item['price'] * $item['quantity']);
    $shipping = $subtotal > 0 ? 5.99 : 0;
    $total = $subtotal + $shipping;

    $order = Order::create([
        'user_id' => auth()->id(),
        'note' => $validated['note'],
        'address' => $validated['address'],
        'payment_type' => $validated['paymentType'],
        'subtotal' => $subtotal,
        'shipping' => $shipping,
        'total' => $total,
    ]);

    foreach ($validated['items'] as $item) {
        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item['product_id'],
            'product_name' => $item['name'],
            'product_image' => $item['image'],
            'price' => $item['price'],
            'quantity' => $item['quantity'],
        ]);
    }

    return response()->json([
        'message' => 'Order placed successfully!',
        'order_id' => $order->id,
        'total' => $total
    ], 201);
}

}


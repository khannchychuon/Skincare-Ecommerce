export default function PromotionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* 50% Off Promotion */}
      <div className="bg-amber-50 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-gray-900">Get Your 50% Off</h3>
            <p className="mt-2 text-sm text-gray-600">Nourish your skin with toxin-free cosmetic products.</p>
            <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
          <div>
            <img src="/images/promo-model.png" alt="Model with sunglasses" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Check This Out Promotion */}
      <div className="bg-amber-50 rounded-lg p-6">
        <h3 className="text-xl font-medium text-gray-900">
          Check
          <br />
          This Out
        </h3>
        <p className="mt-1 text-gray-600">From</p>
        <p className="text-2xl font-semibold text-gray-900">$169</p>
        <div className="mt-4 flex justify-end">
          <img src="/images/skincare-products.png" alt="Skincare products" className="h-32 object-contain" />
        </div>
      </div>

      {/* Body Lotion Promotion */}
      <div className="bg-amber-50 rounded-lg p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-medium text-gray-900">Body Lotion</h3>
            <p className="mt-1 text-gray-600">From</p>
            <p className="text-2xl font-semibold text-gray-900">$39</p>
            <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
          <div className="flex items-center">
            <img src="/images/body-lotion.png" alt="Body lotion" className="h-32 object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

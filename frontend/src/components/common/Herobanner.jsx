export default function HeroBanner() {
  return (
    <div className="relative bg-pink-100 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Free
            <br />
            Shipping
            <br />
            Beauty
          </h1>
          <p className="mt-4 text-gray-700">
            Shop Top Quality Haircare, Makeup, Skincare,
            <br />
            Nailcare &amp; Much More.
          </p>
          <div className="mt-6">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/images/model.png"
            alt="Beauty model with pink flower"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button className="w-2 h-2 rounded-full bg-pink-300"></button>
        <button className="w-2 h-2 rounded-full bg-pink-500"></button>
        <button className="w-2 h-2 rounded-full bg-pink-300"></button>
        <button className="w-2 h-2 rounded-full bg-pink-300"></button>
      </div>
    </div>
  );
}

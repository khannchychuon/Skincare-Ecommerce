import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/page/Home";
import Products from "./components/pAGE/Products";
import ProductDetail from "./components/page/ProductDetail";
import Cart from "./components/pAGE/Cart";
import Checkout from "./components/page/Checkout";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { CartProvider } from "./components/context/CartContext";
import Footer from "./components/common/Footer";
import TopBanner from "./how/TopBanner";
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <TopBanner />
          <div className="flex flex-col min-h-screen ">
            <Navbar />

            <main className=" flex-grow  ">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
              </Routes>
            </main>
            <Footer />
          </div>{" "}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
// "use client";

// import { useState } from "react";
// import Navbar from "./how/Navbar";
// import TopBanner from "./how/TopBanner";
// import CategorySection from "./how/CategorySection";
// import HeroBanner from "./how/HeroBanner";
// import PromotionSection from "./how/PromotionSection";
// import Footer from "./how/Footer";

// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   return (
//     <div className="min-h-screen bg-pink-50">
//       <TopBanner />
//       <Navbar cartCount={cartCount} />
//       <main className="container mx-auto px-4 pb-12">
//         <CategorySection />
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
//           <div className="lg:col-span-2">
//             <HeroBanner />
//           </div>
//           <div className="lg:col-span-1">
//             <div className="h-full bg-purple-100 rounded-lg p-8 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-serif text-purple-900">
//                   Beauty & Care
//                 </h2>
//                 <p className="text-gray-700 mt-2">From $299</p>
//               </div>
//               <div className="mt-4 flex justify-center">
//                 <img
//                   src="/images/beauty-products.png"
//                   alt="Beauty Products"
//                   className="h-48 object-contain"
//                 />
//               </div>
//               <button className="mt-4 bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition">
//                 Discover Now
//               </button>
//             </div>
//           </div>
//         </div>
//         <PromotionSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

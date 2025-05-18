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
import Register from "./Authentication/Register";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <TopBanner />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

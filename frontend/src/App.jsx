import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/page/Home";
import Products from "./components/page/Products";
import ProductDetail from "./components/page/ProductDetail";
import Cart from "./components/page/Cart";
import Checkout from "./components/page/Checkout";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { CartProvider } from "./components/context/CartContext";
import Footer from "./how/Footer";
import PrivacyPolicy from "./components/page/PrivacyPolicy";
import Faq from "./components/page/Faq";
import Login from "./Authentication/Login";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/login" element={<Login />} />
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

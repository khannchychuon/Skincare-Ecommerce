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
<<<<<<< HEAD
import Footer from "./components/common/Footer";
import TopBanner from "./how/TopBanner";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";

function AppLayout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/register" || location.pathname === "/login";
  // Hide layout on /register

  return (
    <div className="min-h-screen bg-white">
      {!hideLayout && <TopBanner />}
      <div className="flex flex-col min-h-screen">
        {!hideLayout && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
}
=======
import Footer from "./how/Footer";
import PrivacyPolicy from "./components/page/PrivacyPolicy";
import Faq from "./components/page/Faq";
import Login from "./Authentication/Login";
>>>>>>> 2b39d7ac21912006748069076795ab8d0dd52040

function App() {
  return (
    <CartProvider>
      <Router>
<<<<<<< HEAD
        <AppLayout />
=======
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
>>>>>>> 2b39d7ac21912006748069076795ab8d0dd52040
      </Router>
    </CartProvider>
  );
}

export default App;

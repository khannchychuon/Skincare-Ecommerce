import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import Navbar from "./components/common/Navbar";
import Footer from "./how/Footer";
import Home from "./components/page/Home";
import Products from "./components/page/Products";
import ProductDetail from "./components/page/ProductDetail";
import Cart from "./components/page/Cart";
import Checkout from "./components/page/Checkout";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import PrivacyPolicy from "./components/page/PrivacyPolicy";
import Faq from "./components/page/Faq";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import UserProfile from "./Authentication/User-profile";

function RequireAuth({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function AppWrapper() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/login", "/register"].includes(
    location.pathname
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideNavbarAndFooter && <Navbar />}
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
          <Route path="/register" element={<Register />} />

          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppWrapper />
    </CartProvider>
  );
}

// Export App
export default App;

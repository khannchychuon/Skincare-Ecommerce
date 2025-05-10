import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/common/Navbar";
import TopBanner from "./components/common/Topbar";
import HeroBanner from "./components/common/Herobanner";
import Footer from "./components/common/Footer";
import CategorySection from "./components/common/CatSection";
import PromotionSection from "./components/common/Promotion";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
);

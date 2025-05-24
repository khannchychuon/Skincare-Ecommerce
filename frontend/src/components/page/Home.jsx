import { Link } from "react-router-dom";
import FeaturedProducts from "../common/FeaturedProducts";
import HeroBanner from "../../how/HeroBanner";
import BestSellers from "../common/BestSellers";
import Promotions from "../common/Promotions";
import BrandFeature from "../common/BrandFeature";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Promotions />
      <FeaturedProducts />
      <BestSellers />
      <BrandFeature />
    </div>
  );
};

export default Home;

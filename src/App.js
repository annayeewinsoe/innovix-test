import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SlideAds from "./components/SlideAds";
import Promotions from "./components/Promotions";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div id="navigation">
        <Header />
        <Navbar />
      </div>
      <SlideAds />
      <Promotions />
      <Products />
      <Categories />
      <Services />
      <FeaturedProducts />
      <Offers />
      <Footer />
    </div>
  );
}


import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // or "auto" for instant scroll
    });
  }, [pathname]);

  return null;
};
// Lazy load all page components
const Home = lazy(() => import("./pages/Home"));
const People = lazy(() => import("./pages/People"));
const Jewellery = lazy(() => import("./pages/Jewellery"));
const Products = lazy(() => import("./pages/Products"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Clients = lazy(() => import("./pages/Clients"));
const Lens = lazy(() => import("./pages/Lens"));
const BTS = lazy(() => import("./pages/BTS"));
const Wildlife = lazy(() => import("./pages/Wildlife"));
const Wedding = lazy(() => import("./pages/Wedding"));
const Fashion = lazy(() => import("./pages/Fashion"));
const Services = lazy(() => import("./components/Services"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadImages = async () => {
      const imageUrls = [
        // Add paths to your most critical images here
        '/images/hero-image.jpg',
        '/images/logo.png'
      ];
      
      await Promise.all(imageUrls.map(url => {
        new Image().src = url;
      }));
    };

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    preloadImages();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <ScrollToTop/>
          <main className="text-center">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/lens" element={<Lens />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/bts" element={<BTS />} />
                <Route path="/wedding" element={<Wedding />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/wildlife" element={<Wildlife />} />
                <Route path="/services" element={<Services />} />
                <Route path="/jewellery" element={<Jewellery />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default React.memo(App);
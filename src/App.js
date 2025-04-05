import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import People from "./pages/People";
import Jewellery from "./pages/Jewellery";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";
import Lens from "./pages/Lens";
import BTS  from "./pages/BTS";
import Wedding from "./pages/Wedding";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {/* Navbar */}
          <Navbar/>

          {/* Main Content */}
          <main className="text-center">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/lens" element={<Lens />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/bts" element={<BTS />} />
              <Route path="/wedding" element={<Wedding />} />
              
              <Route path="/jewellery" element={<Jewellery />} />
              <Route path="/products" element={<Products />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}

export default App;

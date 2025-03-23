import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import People from "./pages/People";
import Jewellery from "./pages/Jewellery";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

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
          <main className="p-6 text-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
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

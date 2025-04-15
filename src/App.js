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
// import { HashRouter as Router } from "react-router-dom";
import Wildlife from "./pages/Wildlife";
import Wedding from "./pages/Wedding";
import Fashion from "./pages/Fashion";
import Services from "./components/Services";
import Footer from "./components/Footer";
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
            {/* <Router> */}

            <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/people" element={<People />} />
  <Route path="/portfolio" element={<Portfolio />} />  {/* Changed from /Portfolio */}
  <Route path="/lens" element={<Lens />} />
  <Route path="/clients" element={<Clients />} />
  <Route path="/bts" element={<BTS />} />
  <Route path="/wedding" element={<Wedding />} />
  <Route path="/fashion" element={<Fashion />} />
  <Route path="/wildlife" element={<Wildlife />} />
  
  <Route path="/services" element={<Services />} />    {/* Changed from /Services */}
  <Route path="/jewellery" element={<Jewellery />} />
  <Route path="/products" element={<Products />} />
  <Route path="/contact" element={<ContactUs />} />    {/* Changed from /ContactUs */}
</Routes>
  
            {/* </Router> */}
          </main>
<Footer/>
        </>
      )}
    </div>
  );
}

export default App;

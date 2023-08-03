import React, { useState, useEffect } from "react";
import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import HeaderSlider from "./Components/Body/HeaderSlider";
import MostWanted from "./Components/Body/MostWanted";
import Assortment from "./Components/Body/Assortment";
import Footer from "./Components/Body/Footer";
import "./App.css";
function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const staticDiv = document.querySelector(".static");
      const offset = staticDiv.offsetTop;
      if (window.pageYOffset > offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <HeaderStrip />
      <div className={isSticky ? "static fixed" : "static"}>
        <HeaderLogo />
        <HeaderNavigation />
      </div>
      <HeaderSlider />
      <MostWanted />
      <Assortment />
      <Footer />
    </>
  );
}

export default App;

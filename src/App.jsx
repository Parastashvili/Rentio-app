import React, { useState, useEffect } from "react";
import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import HeaderSlider from "./Components/Body/HeaderSlider";
import MostWanted from "./Components/Body/MostWanted";
import Assortment from "./Components/Body/Assortment";
import Footer from "./Components/Body/Footer";
import "./App.css";
import MidHero from "./Components/Body/MidHero";
import Brands from "./Components/Body/Brands";
import Delivery from "./Components/Body/Delivery";
function App() {
  const [currency, setCurrency] = useState(1);
  const changeCurrency = (e) => {
    setCurrency(e);
  };
  const changeCurrencySign = (e) => {
    setCurrencySign(e);
  };
  const [currencySign, setCurrencySign] = useState("₾");
  const [isSticky, setIsSticky] = useState(false);

  const existingBasket = localStorage.getItem("basket");
  const [basketQuantity, setBasketQuantity] = useState(
    existingBasket ? JSON.parse(existingBasket).length : 0
  );
  const handleBasketQuantityChange = (quantity) => {
    setBasketQuantity(quantity);
  };
  const [basketQuantity2, setBasketQuantity2] = useState(
    existingBasket ? JSON.parse(existingBasket).length : 0
  );
  const handleBasketQuantityChange2 = (quantity) => {
    setBasketQuantity2(quantity);
  };
  useEffect(() => {
    setBasketQuantity(basketQuantity2);
  }, [basketQuantity2]);
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
      <HeaderStrip
        currencySet={changeCurrency}
        currencySignSet={changeCurrencySign}
      />
      <div className={isSticky ? "static fixed" : "static"}>
        <HeaderLogo
          badge={basketQuantity}
          onBasketQuantityChange2={handleBasketQuantityChange2}
        />
        <HeaderNavigation />
      </div>
      <HeaderSlider />
      <MostWanted currencyVal={currency} currencySign={currencySign} />
      <Assortment
        onBasketQuantityChange={handleBasketQuantityChange}
        currencyVal={currency}
        currencySign={currencySign}
      />
      <Delivery />
      <MidHero />
      <Brands />
      <Footer basketQuantity2={basketQuantity2} />
    </>
  );
}

export default App;

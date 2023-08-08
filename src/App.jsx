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
import SectionHeader from "./Styled/SectionHeader";
import { languages } from "./languages";
function App() {
  const getLang = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    getLang ? JSON.parse(getLang) : "ka"
  );
  const changeLanguage = (e) => {
    setLanguage(e);
    localStorage.setItem("language", JSON.stringify(e));
  };
  const [currency, setCurrency] = useState(1);
  const changeCurrency = (e) => {
    setCurrency(e);
  };
  const changeCurrencySign = (e) => {
    setCurrencySign(e);
  };
  const [currencySign, setCurrencySign] = useState("₾");
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
  return (
    <>
      <HeaderStrip
        currencySet={changeCurrency}
        currencySignSet={changeCurrencySign}
        languageSet={changeLanguage}
      />
      <HeaderLogo
        badge={basketQuantity}
        onBasketQuantityChange2={handleBasketQuantityChange2}
      />
      <HeaderNavigation />
      <HeaderSlider />
      <SectionHeader>{languages[language].mostwanted}</SectionHeader>
      <MostWanted
        lang={language}
        currencyVal={currency}
        currencySign={currencySign}
      />
      <SectionHeader>{languages[language].allproducts}</SectionHeader>
      <Assortment
        lang={language}
        onBasketQuantityChange={handleBasketQuantityChange}
        currencyVal={currency}
        currencySign={currencySign}
      />
      <Delivery lang={language} />
      <MidHero lang={language} />
      <Brands lang={language} />
      <Footer basketQuantity2={basketQuantity2} />
    </>
  );
}

export default App;

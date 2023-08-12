import React, { useState, useEffect } from "react";
import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import Footer from "./Components/Body/Footer";
import "./App.css";
function App() {
  const getLang = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    getLang ? JSON.parse(getLang) : "ka"
  );
  const changeLanguage = (e) => {
    setLanguage(e);
    localStorage.setItem("language", JSON.stringify(e));
  };
  const getCurr = localStorage.getItem("currency");
  const [currency, setCurrency] = useState(getCurr ? JSON.parse(getCurr) : 1);
  const changeCurrency = (e) => {
    setCurrency(e);
    localStorage.setItem("currency", JSON.stringify(e));
  };
  const getCurrSign = localStorage.getItem("currencySign");
  const [currencySign, setCurrencySign] = useState(
    getCurrSign ? JSON.parse(getCurrSign) : "₾"
  );
  const changeCurrencySign = (e) => {
    setCurrencySign(e);
    localStorage.setItem("currencySign", JSON.stringify(e));
  };
  const existingBasket = localStorage.getItem("basket");
  const [basketQuantity, setBasketQuantity] = useState(
    existingBasket ? JSON.parse(existingBasket).length : 0
  );
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
        lang={language}
      />
      <HeaderLogo
        badge={basketQuantity}
        onBasketQuantityChange2={handleBasketQuantityChange2}
      />
      <HeaderNavigation lang={language} />
      <Footer basketQuantity2={basketQuantity2} />
    </>
  );
}

export default App;

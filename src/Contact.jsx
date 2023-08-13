import React, { useState, useEffect } from "react";
import HeaderStrip from "./Components/Header/HeaderStrip";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import Footer from "./Components/Body/Footer";
import Map from "./Components/Body/Map";
import "./App.css";
import { styled } from "styled-components";
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
      <Cont>
        <p className="hours v1">სამუშაო გრაფიკი:</p>
        <p className="hours v2">ორშაბათი - კვირა</p>
        <p className="hours v2">08:00 - 20:00 </p>
        <p className="hours v1">მისამართი:</p>
        <p className="hours v2">ლილოს დასახლება მე-5 კვარტ. 1-ლი კორპ. </p>
        <p className="hours v1">მობილური:</p>
        <p className="hours v2">557 60 23 53</p>
        <p className="hours v2">591 12 07 74</p>
      </Cont>
      <Map />
      <Footer basketQuantity2={basketQuantity2} />
    </>
  );
}

export default App;
const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .hours {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 22px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    line-height: 18px;
  }
  .v1 {
    margin-top: 30px;
  }
  .v2 {
    font-size: 17px;
  }
`;

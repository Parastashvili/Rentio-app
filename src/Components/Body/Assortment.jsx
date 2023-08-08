import React from "react";
import { styled } from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import data from "../../data/data";
import { message } from "antd";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { languages } from "../../languages";
const Assortment = ({
  onBasketQuantityChange,
  currencyVal,
  currencySign,
  lang,
}) => {
  const [firebaseData, setFirebaseData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "carusell"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setFirebaseData(list);
      },
      (error) => {}
    );
    return () => {
      unsub();
    };
  }, []);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "პროდუქტი დამატებულია",
    });
  };
  const error = () => {
    messageApi.open({
      type: "warning",
      content: "პროდუქტი უკვე კალათაშია",
    });
  };
  const addBasket = (data) => {
    const existingBasket = localStorage.getItem("basket");
    const basket = existingBasket ? JSON.parse(existingBasket) : [];
    const isItemExists = basket.some((item) => item.id === data.id);
    if (isItemExists) {
      error();
      return;
    } else {
      success();
    }
    basket.push(data);
    const updatedBasketJSON = JSON.stringify(basket);
    localStorage.setItem("basket", updatedBasketJSON);
    const QTY = JSON.parse(localStorage.getItem("basket")).length;
    onBasketQuantityChange(QTY);
  };
  const wholeAssortment = data;
  return (
    <Outer>
      <CardContainer>
        {wholeAssortment.map((data, index) => (
          <Card key={data.id}>
            <div
              className="img"
              style={{ backgroundImage: `URL(${data.img})` }}
            />
            <div className="desc">
              <p className="name">{data.name[lang]}</p>
              <p className="spec">{data.dsc[lang]}</p>
              <p className="pricee">
                {Math.ceil((data.dailyprice * currencyVal) / 2)}
                {currencySign} - {languages[lang].from}
              </p>
              <button className="btn" onClick={() => addBasket(data)}>
                <ShoppingCartOutlined />
                {languages[lang].add}
              </button>
              {contextHolder}
            </div>
          </Card>
        ))}
      </CardContainer>
    </Outer>
  );
};
export default Assortment;
const Outer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto auto 100px auto;
  overflow: hidden;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 809px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
const Card = styled.div`
  background-color: rgb(256, 256, 256, 1);
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  display: flex;
  width: calc(100% - 40px);
  height: 250px;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px 20px;
  @media screen and (max-width: 809px) {
    height: 135px;
  }
  .desc {
    width: 180px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 809px) {
      width: calc(100% - 150px);
    }
    .name {
      color: #000000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      text-decoration: none;
      height: 45px;
      position: absolute;
      top: 10px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 809px) {
        top: 5px;
        left: 160px;
        height: 22px;
        font-size: 14px;
      }
    }
    .spec {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 13px;
      font-weight: 300;
      line-height: 14px;
      text-decoration: none;
      position: absolute;
      height: 120px;
      top: 55px;
      left: 59%;
      overflow: hidden;
      padding-right: 10px;
      @media screen and (max-width: 809px) {
        top: 35px;
        left: 160px;
        height: 55px;
        font-size: 12px;
      }
    }
    .pricee {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 15px;
      text-decoration: none;
      position: absolute;
      height: 20px;
      top: 200px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 809px) {
        top: 90px;
        left: 160px;
        height: 70px;
        font-size: 13px;
      }
    }
    .btn {
      background-color: #febd18;
      border-width: 0;
      border-radius: 5px;
      color: #ffffff;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 5px 0;
      width: 120px;
      cursor: pointer;
      position: absolute;
      top: 220px;
      left: 59%;
      overflow: hidden;
      text-transform: capitalize;
      &:hover {
        opacity: 0.7;
      }
      @media screen and (max-width: 809px) {
        top: 110px;
        left: 160px;
      }
    }
  }
  .img {
    width: 220px;
    height: 220px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: ease 0.3s;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      scale: 1.05;
    }
    @media screen and (max-width: 809px) {
      width: 130px;
      height: 130px;
    }
  }
`;

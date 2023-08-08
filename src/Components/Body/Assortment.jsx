import React from "react";
import { styled } from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import data from "../../data/data";
import { message } from "antd";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
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
        console.log(list[0].name[ka]);
        console.log(datae);
      },
      (error) => {
        console.log(error);
      }
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
      <p className="section">ყველა ინსტრუმენტი</p>
      <CardContainer>
        {wholeAssortment.map((data) => (
          <Card key={data.id}>
            <div
              className="img"
              style={{ backgroundImage: `URL(${data.img})` }}
            />
            <div className="desc">
              <p className="name">{data.nameKa}</p>
              <p className="spec">{data.dscKa}</p>
              <p className="pricee">
                {Math.ceil((data.dailyprice * currencyVal) / 2)}
                {currencySign} - დან
              </p>
              <button className="btn" onClick={() => addBasket(data)}>
                <ShoppingCartOutlined />
                დამატება
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
  max-width: 1300px;
  margin: auto;
  margin-bottom: 100px;
  .section {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    padding: 20px 50px;
  }
`;
const Card = styled.div`
  background-color: rgb(256, 256, 256, 1);
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  display: flex;
  width: 320px;
  height: 200px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  position: relative;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: 145px;
    height: 350px;
  }
  .desc {
    width: 150px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .name {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;
      text-decoration: none;
      height: 40px;
      position: absolute;
      top: 20px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 750px) {
        top: 180px;
        left: 10px;
      }
    }
    .spec {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 12px;
      font-weight: 300;
      line-height: 14px;
      text-decoration: none;
      position: absolute;
      height: 70px;
      width: 140px;
      top: 70px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 750px) {
        top: 220px;
        left: 10px;
      }
    }
    .pricee {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 13px;
      font-weight: 500;
      line-height: 15px;
      text-decoration: none;
      position: absolute;
      height: 15px;
      top: 150px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 750px) {
        top: 300px;
        left: 10px;
      }
    }
    .btn {
      background-color: #febd18;
      border-width: 0;
      border-radius: 5px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 5px 0;
      width: 120px;
      cursor: pointer;
      position: absolute;
      top: 170px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 750px) {
        top: 320px;
        left: 10px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .img {
    width: 200px;
    height: 150px;
    background-position: center;
    background-size: cover;
    transition: ease 0.3s;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      scale: 1.05;
    }
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding: 0 20px;
`;

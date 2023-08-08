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
import { experimentalStyled as styleds } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
const Assortment = ({
  onBasketQuantityChange,
  currencyVal,
  currencySign,
  lang,
}) => {
  const Item = styleds(Paper)(({ theme }) => ({
    backgroundColor: "#ffffff",
    padding: theme.spacing(2),
    height: "200px",
    widows: "200px",
    textAlign: "center",
  }));
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
      {/* <Box sx={{ flexGrow: "1" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 3 }}
          columns={{ xs: 1, sm: 3, md: 3 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={1} sm={1.5} md={1} key={index}>
              <Item>55</Item>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <CardContainer>
        {wholeAssortment.map((data) => (
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
`;
const Card = styled.div`
  background-color: rgb(256, 256, 256, 1);
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 864px) {
  }
  .desc {
    width: 180px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 864px) {
      width: calc(100% - 150px);
    }
    .name {
      color: #000000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
      text-decoration: none;
      height: 45px;
      position: absolute;
      top: 20px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 864px) {
        top: 5px;
        left: 150px;
        height: 22px;
        font-size: 16px;
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
      top: 65px;
      left: 59%;
      overflow: hidden;
      padding-right: 10px;
      @media screen and (max-width: 864px) {
        top: 35px;
        left: 150px;
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
      top: 190px;
      left: 59%;
      overflow: hidden;
      @media screen and (max-width: 864px) {
        top: 90px;
        left: 150px;
        height: 70px;
        font-size: 13px;
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
      top: 220px;
      left: 59%;
      overflow: hidden;
      &:hover {
        opacity: 0.7;
      }
      @media screen and (max-width: 864px) {
        top: 110px;
        left: 150px;
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
    @media screen and (max-width: 864px) {
      width: 130px;
      height: 130px;
    }
  }
`;

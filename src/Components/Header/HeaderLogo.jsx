import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import logo from "../../assets/black.png";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Divider } from "antd";
import { Modal } from "antd";
import { Image } from "antd";
import { InputNumber } from "antd";
import { Avatar, Badge } from "antd";
const HeaderLogo = ({ onBasketQuantityChange2, badge }) => {
  const [days, setDays] = useState(3);
  const countPrice = (value) => {
    setDays(value);
  };
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [modalOpen, setModalOpen] = useState(false);
  const existingBasket = localStorage.getItem("basket");
  const basket = existingBasket ? JSON.parse(existingBasket) : [];
  const totalPrices = () => {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
      total += parseInt(basket[i].dailyprice) * days;
    }
    return total;
  };
  const removeFromBasket = (data) => {
    const existingBasket = localStorage.getItem("basket");
    if (existingBasket) {
      const basket = JSON.parse(existingBasket);
      const updatedBasket = basket.filter((item) => item.id !== data.id);
      const updatedBasketJSON = JSON.stringify(updatedBasket);
      localStorage.setItem("basket", updatedBasketJSON);
      const QTY = JSON.parse(localStorage.getItem("basket")).length;
      onBasketQuantityChange2(QTY);
    }
  };
  const [showFloatBasket, setShowFloatBasket] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY || document.documentElement.scrollTop;
      setShowFloatBasket(scrollHeight > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Logo>
      <img className="logo" src={logo} alt="site logo rentio" />
      <div className="user">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Divider type="vertical" />
        <Badge count={badge}>
          <Avatar
            shape="square"
            icon={
              <ShoppingCartOutlined
                type="primary"
                onClick={() => setModalOpen(true)}
              />
            }
          />
        </Badge>
        <FloatBasket show={showFloatBasket}>
          <Badge count={badge}>
            <Avatar
              shape="square"
              icon={
                <ShoppingCartOutlined
                  type="primary"
                  onClick={() => setModalOpen(true)}
                />
              }
            />
          </Badge>
        </FloatBasket>
        <Modal
          okText={"დაკავშირება"}
          cancelText={"დახურვა"}
          title="კალათა"
          centered
          visible={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        >
          <Basket style={{ marginBottom: "20px" }}>
            <p>ნივთი</p>
            <p>დრიური ფასი</p>
            <p>ფასი ჯამში</p>
          </Basket>
          {basket.map((data) => (
            <Basket key={data.id}>
              <div className="imgcont">
                <Image preview={false} width={80} height={80} src={data.img} />
                <p>{data.name.ka}</p>
              </div>
              <p className="daily price">{data.dailyprice} ლარი</p>
              <p className="total price">{days * data.dailyprice} ლარი</p>
              <DeleteOutlined
                style={{ color: "red" }}
                onClick={() => removeFromBasket(data)}
              />
            </Basket>
          ))}
          <Counter>
            <div className="inner">
              <p className="totaltextdaycount">დღეების რაოდენობა</p>
              <InputNumber
                min={1}
                max={90}
                defaultValue={3}
                onChange={countPrice}
              />
            </div>
            <div className="inner">
              <p className="totaltextdaycount">საერთო ფასი</p>
              <p className="totalprice">{totalPrices() + " ლარი"}</p>
            </div>
          </Counter>
        </Modal>
      </div>
    </Logo>
  );
};
export default HeaderLogo;
const FloatBasket = styled.div`
  position: fixed;
  bottom: 30px;
  right: 10%;
  scale: 1.5;
  z-index: 10;
  background-color: #ffffff;
  border-radius: 5px;
  display: ${(props) => (props.show ? "block" : "none")};
  animation: jump 15s ease infinite;
  @keyframes jump {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  max-width: 1200px;
  margin: auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
  img {
    width: 150px;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    svg {
      transition: ease 0.3s;
      scale: 1.3;
      cursor: pointer;
    }
  }
`;
const Basket = styled.div`
  font-family: "Noto Sans Georgian", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-child(1) {
    width: 80px;
  }
  :nth-child(2) {
    width: 110px;
    text-align: right;
  }
  :nth-child(3) {
    width: 90px;
    text-align: right;
  }
  :nth-child(4) {
    scale: 1.1;
    transition: ease 0.3s;
    margin: 0px -45px 0px -110px;
    @media screen and (max-width: 530px) {
      margin: 0px -50px 0px -100px;
    }
    @media screen and (max-width: 500px) {
      margin: 0px -40px 0px -40px;
    }
    @media screen and (max-width: 390px) {
      margin: 0px -40px 0px -10px;
    }
    &:hover {
      scale: 1.3;
      cursor: pointer;
    }
  }
  .price {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
  }
  .imgcont {
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 500px) {
      :nth-child(2) {
        display: none;
      }
    }
  }
`;
const Counter = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
  }
  .totaltextdaycount {
    color: #000000;
    font-size: 15px;
    font-weight: 400;
  }
  .totalprice {
    color: #febd18;
    font-size: 20px;
    font-weight: 700;
  }
`;

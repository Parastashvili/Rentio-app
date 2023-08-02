import React, { useState } from "react";
import { styled } from "styled-components";
import logo from "../../assets/black.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Divider } from "antd";
import { Modal } from "antd";
import { Image } from "antd";
import { InputNumber } from "antd";
import { Avatar, Badge } from "antd";
export default function HeaderLogo() {
  const [days, setDays] = useState(3);
  const countPrice = (value) => {
    setDays(value);
  };
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [modalOpen, setModalOpen] = useState(false);
  const basket = [
    {
      id: 1,
      name: {
        ka: "კუთხსახეხი",
        en: "Angle grinder",
        ru: "Углошлифовальные",
      },
      img: "https://media.veli.store/media/product/GWS_9-125_4.jpg",
      dailyprice: "14",
    },
    {
      id: 2,
      name: {
        ka: "პერფერატორი",
        en: "Angle grinder",
        ru: "Углошлифовальные",
      },
      img: "https://isurve.ge/cdn/shop/products/1-min_d5f600ee-8f5b-4875-b65f-c0fb0a4500b4_250x.jpg?v=1676112034",
      dailyprice: "12",
    },
    {
      id: 2,
      name: {
        ka: "პერფერატორი",
        en: "Angle grinder",
        ru: "Углошлифовальные",
      },
      img: "https://isurve.ge/cdn/shop/products/1-min_d5f600ee-8f5b-4875-b65f-c0fb0a4500b4_250x.jpg?v=1676112034",
      dailyprice: "44",
    },
  ];
  const totalPrices = () => {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
      total += parseInt(basket[i].dailyprice) * days;
    }
    return total;
  };
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
        <Badge count={basket.length}>
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
        <Modal
          okText={"დაკავშირება"}
          cancelText={"დახურვა"}
          title="კალათა"
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        >
          <Basket style={{ marginBottom: "20px" }}>
            <p>ნივთი</p>
            <p>დრიური ფასი</p>
            <p>ფასი ჯამში</p>
          </Basket>
          {basket.map((data) => (
            <Basket>
              <div className="imgcont">
                <Image preview={false} width={80} height={80} src={data.img} />
                <p>{data.name.ka}</p>
              </div>
              <p className="daily price">{data.dailyprice} ლარი</p>
              <p className="total price">{days * data.dailyprice} ლარი</p>
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
}
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
  .price {
    color: #000000;
    font-size: 14px;
    font-weight: 500;
  }
  .imgcont {
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 450px) {
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

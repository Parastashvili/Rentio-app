import React from "react";
import {
  HomeOutlined,
  CarOutlined,
  AuditOutlined,
  SmileOutlined,
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { styled } from "styled-components";
export default function Footer() {
  return (
    <Foot>
      <div className="wrapper">
        <div>
          <h3 className="mainText">ნავიგაცია</h3>
          <span className="flexer">
            <HomeOutlined className="icon" />
            <p className="navigationtext">მთავარი</p>
          </span>
          <span className="flexer">
            <SmileOutlined className="icon" />
            <p className="navigationtext">ჩვენს შესახებ</p>
          </span>
          <span className="flexer">
            <AuditOutlined className="icon" />
            <p className="navigationtext">პირობები</p>
          </span>
          <span className="flexer">
            <CarOutlined className="icon" />
            <p className="navigationtext">მიწოდება</p>
          </span>
        </div>
        <div>
          <h3 className="mainText">კონტაქტი</h3>
          <div className="navigationtext">
            ჩვენი სამუშაო საათებია: <br /> ორშაბათი - კვირა <br /> 08:00-დან
            20:00-მდე
          </div>
          <div className="contactIcons">
            <FacebookOutlined className="icons" />
            <InstagramOutlined className="icons" />
            <WhatsAppOutlined className="icons" />
          </div>
          <PhoneOutlined className="icons" />
          <p className="mobile">557 60 23 53</p>
          <br />
        </div>
        <div>
          <h3 className="mainText">მისამართი</h3>
          <p className="navigationtext" style={{ maxWidth: "200px" }}>
            ჩვენი მისამართია: <br /> ლილოს დასახლება
          </p>
          <p className="navigationtext" style={{ maxWidth: "200px" }}>
            <br />
            ანგარისსწორება შესაძლებელია როგორც ონლაინ ასევე კურიერთან
          </p>
          <div></div>
        </div>
      </div>
      sdasd
    </Foot>
  );
}

const Foot = styled.div`
  width: 100%;
  height: 270px;
  background-color: #393e46;
  .wrapper {
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    padding-top: 30px;
    .mobile {
      color: #ffffff;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      text-decoration: none;
      display: inline;
    }
    .navigationtext {
      color: #ffffff;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
    .mainText {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      font-family: "Noto Sans Georgian", sans-serif;
      line-height: 24px;
      text-decoration: none;
      cursor: default;
      margin-bottom: 15px;
    }
    .icon {
      color: #ffffff;
    }
    .flexer {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
    }
    .icons {
      color: #ffffff;
      scale: 2;
      margin: 20px 30px 5px 10px;
      transition: ease 0.3s;
      cursor: pointer;
      &:hover {
        color: #febd18;
      }
    }
  }
`;

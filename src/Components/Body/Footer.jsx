import React from "react";
import {
  HomeOutlined,
  CarOutlined,
  AuditOutlined,
  SmileOutlined,
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
        </div>
        <div>
          <h3>მისამართი</h3>
          <p>ჩვენი მისამართია ლილოს დასახლება</p>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.div`
  width: 100%;
  height: 220px;
  background-color: #393e46;
  .wrapper {
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    padding-top: 30px;
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
  }
`;

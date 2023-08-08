import React from "react";
import icon1 from "../../assets/contact/del.svg";
import icon2 from "../../assets/contact/crown.svg";
import icon3 from "../../assets/contact/guar.svg";
import styled from "styled-components";
import { languages } from "../../languages";
export default function Delivery(props) {
  return (
    <Cont>
      <div className="innerdiv">
        <img src={icon1} alt="" />
        <div className="textCont">
          <p className="maintext">{languages[props.lang].delivery}</p>
          <p className="text">{languages[props.lang].delivery2}</p>
        </div>
      </div>
      <div className="innerdiv">
        <img src={icon2} alt="" />
        <div className="textCont">
          <p className="maintext">{languages[props.lang].quality}</p>
          <p className="text">{languages[props.lang].quality2}</p>
        </div>
      </div>
      <div className="innerdiv">
        <img src={icon3} alt="" />
        <div className="textCont">
          <p className="maintext">{languages[props.lang].guarantee}</p>
          <p className="text">{languages[props.lang].guarantee2}</p>
        </div>
      </div>
    </Cont>
  );
}
const Cont = styled.div`
  width: 90%;
  background-color: rgb(57, 62, 70, 0.7);
  padding: 0 20px;
  height: 130px;
  max-width: 1000px;
  margin: -30px auto 60px auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 660px) {
    flex-direction: column;
    height: 430px;
    width: 50%;
  }
  @media screen and (max-width: 458px) {
    width: 70%;
  }
  .innerdiv {
    display: flex;
    align-items: center;
    gap: 10px;
    .textCont {
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: e;
      max-width: 200px;
      height: 80px;
      @media screen and (max-width: 850px) {
        height: 100px;
      }
      @media screen and (max-width: 720px) {
        height: 125px;
      }
      @media screen and (max-width: 660px) {
        height: 80px;
      }
      .maintext {
        color: #ffffff;
        font-family: "Noto Sans Georgian", sans-serif;
        font-size: 22px;
        font-weight: 600;
        line-height: 36px;
        text-transform: capitalize;
      }
      .text {
        color: #ffffff;
        font-family: "Noto Sans Georgian", sans-serif;
        font-size: 13px;
        font-weight: 300;
        line-height: 18px;
        text-transform: capitalize;
      }
    }
  }
`;

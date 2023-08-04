import React from "react";
import { styled } from "styled-components";
import sakfrechi from "../../assets/products/sakrechi.jpg";
import mili from "../../assets/products/mili.jpg";
export default function MidHero() {
  return (
    <Mid>
      <div className="left">
        <img className="productimg" src={sakfrechi} alt="product image" />
        <div className="dscdiv">
          <h3 className="productname">
            გაზონის საკრეჭი მანქანა BOSCH ROTAK 32
          </h3>
          <p className="producdsc">
            შეთავაზებაშია გაზონის საკრეჭი მანქანა BOSCH ROTAK 32. ბალახის
            საკრეჭი რომელიც გარანტირებულად მძლავრად მუშაობს, მაღალსიჩქარიანი
            ძრავის დახმარებით. გააჩნია ერგონომიული დიზაინი და აქვს
            გადახურებისგან დაცვის ფუნქცია. ბალახის საჭრელი იდეალურადაა აგებული
            და მარტივად სამართავია.
          </p>
          <h4 className="productprice">390 ₾</h4>
        </div>
      </div>
      <div className="right">
        <div className="right1">
          <img className="productimg2" src={mili} alt="product image" />
          <div className="dscdiv2">
            <h3 className="productname2">
              გაზონის საკრეჭი მანქანა BOSCH ROTAK 32
            </h3>
            <p className="producdsc2">
              შეთავაზებაშია გაზონის საკრეჭი მანქანა BOSCH ROTAK 32. ბალახის
              საკრეჭი რომელიც გარანტირებულად მძლავრად მუშაობს, მაღალსიჩქარიანი
              ძრავის დახმარებით. გააჩნია ერგონომიული დიზაინი და აქვს
              გადახურებისგან დაცვის ფუნქცია. ბალახის საჭრელი იდეალურადაა აგებული
              და მარტივად სამართავია.
            </p>
            <h4 className="productprice2">390 ₾</h4>
          </div>
        </div>
        <div className="right2">222</div>
      </div>
    </Mid>
  );
}
const Mid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  gap: 30px;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
  .left {
    width: calc(50% - 30px);
    background-color: #ffffff;
    border-radius: 10px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    margin-left: -10px;
    @media screen and (max-width: 690px) {
      width: calc(90% - 10px);
      margin-left: 0px;
    }
    .productimg {
      width: 45%;
    }
    .dscdiv {
      position: relative;
      width: 100%;
      height: 100%;
      .productname {
        color: #000;
        font-family: "Noto Sans Georgian", sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        text-decoration: none;
        position: absolute;
        top: 30px;
        overflow: hidden;
        height: 40px;
      }
      .producdsc {
        color: #000;
        font-family: "Noto Sans Georgian", sans-serif;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        text-decoration: none;
        position: absolute;
        top: 100px;
        overflow: hidden;
        height: 230px;
      }
      .productprice {
        color: #ffffff;
        font-family: "Noto Sans Georgian", sans-serif;
        font-size: 20px;
        font-weight: 800;
        line-height: 20px;
        text-decoration: none;
        position: absolute;
        top: 340px;
        background-color: #febd18;
        padding: 5px 10px;
        border-radius: 5px;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(50% - 50px);
    gap: 20px;
    @media screen and (max-width: 690px) {
      width: calc(90% - 10px);
    }
    .right1 {
      height: 190px;
      width: 100%;
      background-color: green;
      border-radius: 10px;
      padding-right: 20px;
    }
    .right2 {
      width: 100%;
      background-color: yellow;
      border-radius: 10px;
      height: 190px;
      padding-right: 20px;
    }
  }
`;

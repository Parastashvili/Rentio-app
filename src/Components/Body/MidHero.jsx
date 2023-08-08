import React from "react";
import { styled } from "styled-components";
import sakfrechi from "../../assets/products/sakrechi.jpg";
import mili from "../../assets/products/mili.jpg";
import shesawamli from "../../assets/products/shesawamli.jpg";
import { languages } from "../../languages";
export default function MidHero(props) {
  return (
    <Mid>
      <p className="sectionHeader">{languages[props.lang].midderhero}</p>
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
            <h3 className="productname2">სარწყავი მილი 50 მ 3/4 ინჩი</h3>
            <p className="producdsc2">
              სარწყავი მილი 50 მ 3/4 ინჩი PERFOMANCE+ KARCHER <br></br>
              <br></br> ზომა: 390X390X250 მმ <br></br>წონა: 11.5 კგ <br></br>
              დიამეტრი: 3/4" <br></br>მილის სიგრძე: 50 მ
            </p>
            <h4 className="productprice2">55 ₾</h4>
          </div>
        </div>
        <div className="right2">
          <img className="productimg2" src={shesawamli} alt="product image" />
          <div className="dscdiv2">
            <h3 className="productname2">ხელის მექანიკური შესაწამლი</h3>
            <p className="producdsc2">
              ინგკოს პროდუქცია წარმოებულია ჩინეთში. ინგკო მრავალი წელია
              მოღვაწეობს მსოფლიო ბაზარზე. მისი მიზანია პროფესიონალური
              ხელსაწყოები გახადოს ყველასთვის ხელმისაწვდომი. პროდუქცია უნდა იყოს
              ტექნიკურად, ვიზუალურად, ფუნქციურად სრულყოფილი და ასრულებდეს
              ნებისმიერ სამუშაოს ეფექტიანად.
            </p>
            <h4 className="productprice2">125 ₾</h4>
          </div>
        </div>
      </div>
    </Mid>
  );
}
const Mid = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 50px 10px 30px 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  gap: 30px;
  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
  .sectionHeader {
    position: absolute;
    top: -20px;
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 34px;
    background-color: rgb(243, 243, 243);
    text-transform: capitalize;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
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
        height: 45px;
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
    .productimg2 {
      height: 100%;
      width: 190px;
    }
    .productname2 {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-decoration: none;
      position: absolute;
      top: 10px;
      overflow: hidden;
      height: 35px;
    }
    .producdsc2 {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 12px;
      font-weight: 300;
      line-height: 16px;
      text-decoration: none;
      position: absolute;
      top: 50px;
      overflow: hidden;
      height: 100px;
    }
    .productprice2 {
      color: #ffffff;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 15px;
      font-weight: 800;
      line-height: 18px;
      text-decoration: none;
      position: absolute;
      top: 160px;
      background-color: #febd18;
      padding: 2px 10px;
      border-radius: 5px;
    }
    .right1 {
      height: 190px;
      width: 100%;
      background-color: #ffffff;
      border-radius: 10px;
      padding-right: 20px;
      overflow: hidden;
      display: flex;
      position: relative;
    }
    .right2 {
      width: 100%;
      background-color: #ffffff;
      border-radius: 10px;
      height: 190px;
      padding-right: 20px;
      overflow: hidden;
      display: flex;
      position: relative;
    }
  }
`;

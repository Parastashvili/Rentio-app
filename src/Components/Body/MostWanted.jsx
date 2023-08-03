import React from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "./custom.css";
import { Image } from "antd";
import data from "../../data/data";
export default function MostWanted() {
  const popular = data.slice(0, 10);
  return (
    <Outer>
      <p className="name">ყველაზე მოთხოვნადი</p>
      <Splide
        options={{
          type: "loop",
          focus: "center",
          autoplay: true,
          fixedWidth: "200px",
          height: "300px",
        }}
      >
        {popular.map((data) => (
          <SplideSlide key={data.id}>
            <SlideInner>
              <div className="imgOut">
                <Image width={200} height={150} src={data.img} />
              </div>
              <Dsc>
                <p className="itemName">{data.name.ka}</p>
                <p className="itemDsc">{data.dsc.ka}</p>
                <div className="pricecont">
                  <p className="itemPrice">
                    ფასი: {data.dailyprice / 2}₾ დან - {data.dailyprice}₾ მდე
                  </p>
                </div>
              </Dsc>
            </SlideInner>
          </SplideSlide>
        ))}
      </Splide>
    </Outer>
  );
}
const Outer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  .name {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    padding: 50px 0 0 50px;
    margin-bottom: -30px;
  }
`;
const SlideInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  cursor: pointer;
  div {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgOut {
    height: 150px;
    overflow: hidden;
  }
`;
const Dsc = styled.div`
  display: flex;
  align-items: start !important;
  justify-content: start !important;
  flex-direction: column;
  .itemName {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    padding: 5px 10px;
    width: 200px;
    height: 15px;
    overflow: hidden;
  }
  .itemDsc {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 12px;
    font-weight: 300;
    line-height: 15px;
    padding: 5px 10px;
    width: 185px;
    height: 70px;
    overflow: hidden;
  }
  .pricecont {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #febd18;
    .itemPrice {
      color: #000000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 24px;
      padding: 5px 10px;
      height: 24px;
    }
  }
`;

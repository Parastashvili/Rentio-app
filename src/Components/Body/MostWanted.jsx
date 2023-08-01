import React from "react";
import slider6 from "../../assets/slider/6.png";
import slider7 from "../../assets/slider/7.png";
import slider8 from "../../assets/slider/8.jpg";
import slider9 from "../../assets/slider/9.jpg";
import slider1 from "../../assets/slider/1.jpg";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "./custom.css";
export default function MostWanted() {
  const images = [slider1, slider7, slider6, slider9, slider8];
  const index = 5;
  return (
    <Outer>
      <p className="name">ყველაზე მოთხოვნადი</p>
      <Splide
        options={{
          type: "loop",
          focus: "center",
          autoplay: false,
          fixedWidth: "200px",
          height: "240px",
        }}
      >
        {[...Array(index)].map((_, index) => (
          <SplideSlide key={index}>
            <SlideInner>
              <div className="imgOut">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${images[index]})`,
                  }}
                />
              </div>
              <Dsc>
                <p className="itemName">კუთხსახეხი</p>
                <p className="itemDsc">1000W</p>
                <div className="pricecont">
                  <p className="itemPrice">ფასი: 6₾ დან - 24₾ მდე</p>
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
  &:hover {
    .img {
      scale: 1.1;
    }
  }
  div {
    width: 200px;
    display: flex;
    align-items: center;
  }
  .imgOut {
    height: 120px;
    overflow: hidden;
    .img {
      width: 200px;
      height: 120px;
      background-position: center;
      background-size: cover;
      transition: ease 0.2s;
    }
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
    width: 100px;
    height: 10px;
  }
  .itemDsc {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    padding: 5px 10px;
    width: 100px;
    height: 50px;
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

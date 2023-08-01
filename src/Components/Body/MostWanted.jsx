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
              <div
                className="img"
                style={{
                  backgroundImage: `url(${images[index]})`,
                }}
              />
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
  div {
    width: 200px;
    display: flex;
    align-items: center;
  }
  .img {
    width: 200px;
    height: 120px;
    background-position: center;
    background-size: cover;
  }
`;

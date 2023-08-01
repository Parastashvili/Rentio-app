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
      <Splide
        options={{
          type: "loop",
          focus: "center",
          autoplay: true,
          fixedWidth: "200px",
          height: "250px",
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
              <p>Khachapuri</p>
              <div className="priceCont">
                <p>$6.30</p>
              </div>
            </SlideInner>
          </SplideSlide>
        ))}
      </Splide>
    </Outer>
  );
}
const Outer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;
const SlideInner = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
  .img {
    width: 200px;
    height: 200px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: ease 0.3s;
    &:hover {
      scale: 1.1;
    }
  }
  p {
    color: #191d23;
    text-align: center;
    font-family: Playfair Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  .priceCont {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    p {
      font-size: 18px;
    }
  }
`;

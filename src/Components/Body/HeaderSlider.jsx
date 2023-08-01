import React from "react";
import { Carousel } from "antd";
import slider6 from "../../assets/slider/6.png";
import slider7 from "../../assets/slider/7.png";
import slider8 from "../../assets/slider/8.jpg";
import slider9 from "../../assets/slider/9.jpg";
import slider1 from "../../assets/slider/1.jpg";
import { styled } from "styled-components";
export default function HeaderSlider() {
  const images = [slider1, slider7, slider6, slider9, slider8];
  return (
    <Carousel autoplay effect="fade">
      {images.map((image, index) => (
        <Slider key={index}>
          <div
            style={{
              backgroundImage: `URL(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </Slider>
      ))}
    </Carousel>
  );
}
const Slider = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: -200px;
  div {
    width: 100%;
    height: 300px;
    max-width: 1200px;
    margin: auto;
  }
`;

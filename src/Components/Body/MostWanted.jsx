import React from "react";
import item1 from "../../assets/products/bargalka.jpg";
import item2 from "../../assets/products/elq.jpg";
import item3 from "../../assets/products/drujba.jpg";
import item4 from "../../assets/products/perf.jpg";
import item5 from "../../assets/products/beton.jpg";
import item6 from "../../assets/products/satkepn.jpg";
import item7 from "../../assets/products/dreli.jpg";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "./custom.css";
export default function MostWanted() {
  const images = [item1, item2, item3, item4, item5, item6, item7];
  const index = 7;
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
      background-size: contain;
      background-repeat: no-repeat;
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

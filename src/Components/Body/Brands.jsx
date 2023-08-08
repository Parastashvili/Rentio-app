import React from "react";
import styled, { keyframes, css } from "styled-components";
import brand1 from "../../assets/brands/makita.png";
import brand2 from "../../assets/brands/dewalt.png";
import brand3 from "../../assets/brands/ingco.png";
import brand4 from "../../assets/brands/karcher.png";
import brand5 from "../../assets/brands/bosch.png";
import brand6 from "../../assets/brands/facom.png";
import brand7 from "../../assets/brands/festool.png";
import brand8 from "../../assets/brands/hilti.png";
import brand9 from "../../assets/brands/ryobi.png";
import brand10 from "../../assets/brands/stanley.png";
import { languages } from "../../languages";
function App(props) {
  const row1 = [brand1, brand2, brand4, brand5, brand6, brand7, brand10];
  const row2 = [brand1, brand4, brand8, brand3, brand7, brand5, brand9];
  return (
    <AppContainer>
      <Wrapper>
        <Text>{languages[props.lang].bestbrands}</Text>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 80%;
  padding: 30px 0;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.div`
  color: #000000;
  font-family: "Noto Sans Georgian", sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  text-transform: capitalize;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;
const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;
const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #ffffff;
  @media screen and (max-width: 670px) {
    scale: 0.9;
  }
`;

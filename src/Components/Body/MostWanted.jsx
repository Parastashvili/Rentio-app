import React from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import "./custom.css";
import { Image } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { languages } from "../../languages";
const MostWanted = ({ currencyVal, currencySign, lang }) => {
  const [firebaseData, setFirebaseData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "carusell"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setFirebaseData(list);
      } catch (error) {}
    };
    fetchData();
    // Live update code

    // const unsub = onSnapshot(
    //   collection(db, "carusell"),
    //   (snapShot) => {
    //     let list = [];
    //     snapShot.docs.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setFirebaseData(list);
    //     console.log(list[0].name[ka]);
    //     console.log(datae);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // return () => {
    //   unsub();
    // };
  }, []);
  return (
    <Outer>
      <Splide
        options={{
          type: "loop",
          rewind: true,
          autoWidth: true,
          perPage: 1,
        }}
      >
        {firebaseData.map((data, index) => (
          <SplideSlide key={index}>
            <SlideInner>
              <div className="imgOut">
                <Image
                  width={180}
                  height={180}
                  src={data.img}
                  style={{ scale: "0.7" }}
                />
              </div>
              <Dsc>
                <p className="itemName">
                  {lang === "en"
                    ? data.nameEn
                    : lang === "ru"
                    ? data.nameRus
                    : data.nameGeo}
                </p>
                <p>{data.id}</p>
                <p className="itemDsc">
                  {lang === "en"
                    ? data.dscEn
                    : lang === "ru"
                    ? data.dscRus
                    : data.dscGeo}
                </p>
                <div className="pricecont">
                  <p className="itemPrice">
                    {languages[lang].price}
                    {":"}
                    {Math.ceil((data.dailyprice * currencyVal) / 2)}
                    {currencySign}
                    {languages[lang].from} {"- "}
                    {Math.ceil(data.dailyprice * currencyVal)}
                    {currencySign}
                    {languages[lang].to}
                  </p>
                </div>
              </Dsc>
            </SlideInner>
          </SplideSlide>
        ))}
      </Splide>
    </Outer>
  );
};
export default MostWanted;
const Outer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`;
const SlideInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  cursor: pointer;
  div {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgOut {
    height: 130px;
    width: 180px;
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
      overflow: hidden;
    }
  }
`;

import React from "react";
import { styled } from "styled-components";
import img from "../../assets/products/bargalka.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";
export default function Assortment() {
  return (
    <Outer>
      <p className="section">ინსტრუმენტები</p>
      <CardContainer>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
        <Card>
          <div className="img" style={{ backgroundImage: `URL(${img})` }} />
          <div className="desc">
            <p className="name">პერფერატორი</p>
            <p className="spec">1100 ვატი</p>
            <p className="pricee">20 ლარიდან</p>
            <button className="btn">
              <ShoppingCartOutlined />
              დამატება
            </button>
          </div>
        </Card>
      </CardContainer>
    </Outer>
  );
}
const Outer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  margin-bottom: 200px;
  .section {
    color: #000000;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    padding: 20px 50px;
  }
`;
const Card = styled.div`
  background-color: #ffffff;
  width: 295px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  display: flex;
  .desc {
    width: 120px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
    .name {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 15px;
      font-weight: 600;
      line-height: 15px;
      text-decoration: none;
    }
    .spec {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 13px;
      text-decoration: none;
    }
    .pricee {
      color: #000;
      font-family: "Noto Sans Georgian", sans-serif;
      font-size: 13px;
      font-weight: 500;
      line-height: 15px;
      text-decoration: none;
    }
    .btn {
      background-color: #febd18;
      border-width: 0;
      border-radius: 5px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 5px 0;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .img {
    width: 150px;
    height: 150px;
    margin: 0 10px;
    background-position: center;
    background-size: cover;
    transition: ease 0.3s;
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding: 0 40px;
`;

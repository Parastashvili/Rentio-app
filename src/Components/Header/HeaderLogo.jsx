import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/black.png";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
export default function HeaderLogo() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <Logo>
      <img className="logo" src={logo} alt="site logo rentio" />
      <div className="user">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <UserOutlined />
        <ShoppingCartOutlined />
      </div>
    </Logo>
  );
}
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  max-width: 1200px;
  margin: auto;
  img {
    width: 150px;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    svg {
      transition: ease 0.3s;
      scale: 1.3;
      cursor: pointer;
    }
  }
`;

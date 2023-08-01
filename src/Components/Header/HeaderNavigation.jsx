import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
export default function HeaderNavigation() {
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <Nav>
      <a className="navtext" href="">
        მთავარი
      </a>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <p className="navtext">ინსტრუმენტები</p>
            <DownOutlined style={{ color: "#ffffff" }} />
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <p className="navtext">სახლი და ეზო</p>
            <DownOutlined style={{ color: "#ffffff" }} />
          </Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <p className="navtext">ავტო ტექნიკა</p>
            <DownOutlined style={{ color: "#ffffff" }} />
          </Space>
        </a>
      </Dropdown>
      <a className="navtext" href="">
        ჩვენს შესახებ
      </a>
      <a className="navtext" href="">
        პირობები
      </a>
      <a className="navtext" href="">
        კონტაქტი
      </a>
    </Nav>
  );
}
const Nav = styled.div`
  background-color: #393e46;
  padding: 15px;
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  .navtext {
    color: #ffffff;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
  }
`;

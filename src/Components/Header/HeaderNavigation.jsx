import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
export default function HeaderNavigation() {
  const [isOpen, setOpen] = useState(false);
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
      <div className="classic">
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
      </div>
      <Ham>
        <Hamburger
          toggled={isOpen}
          size={26}
          toggle={setOpen}
          color="#ffffff"
        />
        <div
          className="window"
          style={
            isOpen
              ? { transform: "translateX(0px)" }
              : { transform: "translateX(300px)" }
          }
        ></div>
      </Ham>
    </Nav>
  );
}
const Nav = styled.div`
  background-color: #393e46;
  .classic {
    padding: 15px;
    gap: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 973px) {
      display: none;
    }
  }
  .navtext {
    color: #ffffff;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
  }
`;
const Ham = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 3px;
  position: relative;
  .window {
    transition: ease-out 0.2s;
    background-color: rgb(57, 62, 70);
    width: 300px;
    height: 100%;
    position: absolute;
    top: 53px;
    right: 0;
    z-index: 16;
  }
  @media screen and (min-width: 974px) {
    display: none;
  }
`;

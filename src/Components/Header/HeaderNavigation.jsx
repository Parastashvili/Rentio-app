import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import {
  ToolOutlined,
  HomeOutlined,
  RollbackOutlined,
  CarOutlined,
  ContactsOutlined,
  AuditOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
export default function HeaderNavigation() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items2 = [
    getItem("მთავარი", "sub1", <RollbackOutlined />),
    getItem("ინსტრუმენტები", "sub2", <ToolOutlined />, [
      getItem("დრელი", "5"),
      getItem("ჩაქუჩი", "6"),
      getItem("ურო", "sub3", null, [
        getItem("წერაქვი", "7"),
        getItem("ბარი", "8"),
      ]),
    ]),
    getItem("სახლი და ეზო", "sub4", <HomeOutlined />, [
      getItem("ხე", "9"),
      getItem("ბუჩქი", "10"),
      getItem("მინდორი", "11"),
      getItem("ფანტანი", "12"),
    ]),
    getItem("ავტო ტექნიკა", "sub5", <CarOutlined />, [
      getItem("ამწე მანიპულატორი", "13"),
      getItem("თვითმცლელი", "14"),
    ]),
    getItem("ჩვენს შესახებ", "sub6", <SmileOutlined />),
    getItem("პირობები", "sub7", <AuditOutlined />),
    getItem("კონტაქტი", "sub8", <ContactsOutlined />),
  ];
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
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
        >
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
              width: 256,
              margin: "auto",
              marginTop: "20px",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontFamily: "Noto Sans Georgian",
            }}
            items={items2}
          />
        </div>
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
    height: 600px;
    position: absolute;
    top: 53px;
    right: 0;
    z-index: 16;
  }
  @media screen and (min-width: 974px) {
    display: none;
  }
`;

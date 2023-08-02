import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Turn as Hamburger } from "hamburger-react";
import { Drawer } from "antd";
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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const ham = [
    getItem("მთავარი", "sub1", <RollbackOutlined />),
    getItem("ინსტრუმენტები", "sub2", <ToolOutlined />, [
      getItem("ელექტრო ინსტრუმენტები", "5"),
      getItem("სამშენებლო მოწყობილობები", "6"),
      getItem("საწმენდი ტექნიკა", "7"),
      getItem("სამღებრო ინსტრუმენტები", "8"),
      getItem("ხელის ინსტრუმენტები", "9"),
    ]),
    getItem("სახლი და ეზო", "sub3", <HomeOutlined />, [
      getItem("ბაღის მოვლა", "10"),
      getItem("სარწყავი მილები", "11"),
      getItem("ინსტრუმენტების ყუთები", "12"),
      getItem("ბაღის ჭურჭელი", "13"),
    ]),
    getItem("ავტო ტექნიკა", "sub4", <CarOutlined />, [
      getItem("ამწე მანიპულატორი", "14"),
      getItem("თვითმცლელი", "15"),
    ]),
    getItem("ჩვენს შესახებ", "sub5", <SmileOutlined />),
    getItem("პირობები", "sub7", <AuditOutlined />),
    getItem("კონტაქტი", "sub8", <ContactsOutlined />),
  ];
  const rootSubmenuKeys = ["sub2", "sub3", "sub4"];
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const tools = [
    {
      label: "ელექტრო ინსტრუმენტები",
      key: "1",
    },
    {
      label: "სამშენებლო მოწყობილობები",
      key: "2",
    },
    {
      label: "საწმენდი ტექნიკა",
      key: "3",
    },
    {
      label: "სამღებრო ინსტრუმენტები",
      key: "4",
    },
    {
      label: "ხელის ინსტრუმენტები",
      key: "5",
    },
  ];
  const cars = [
    {
      label: "ამწე მანიპულატორი",
      key: "1",
    },
    {
      label: "თვითმცლელი",
      key: "2",
    },
  ];
  const home = [
    {
      label: "ბაღის მოვლა",
      key: "1",
    },
    {
      label: "სარწყავი მილები",
      key: "2",
    },
    {
      label: "ინსტრუმენტების ყუთები",
      key: "3",
    },
    {
      label: "ბაღის ჭურჭელი",
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
            items: tools,
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
            items: home,
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
            items: cars,
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
      <Drawer title="ნავიგაცია" placement="right" onClose={onClose} open={open}>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 330,
            margin: "auto",
            marginTop: "20px",
            backgroundColor: "transparent",
            color: "#000",
            fontFamily: "Noto Sans Georgian",
          }}
          items={ham}
        />
      </Drawer>
      <Ham>
        <Hamburger
          size={26}
          color="#ffffff"
          type="primary"
          onToggle={showDrawer}
          toggled={open}
        />
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
  padding: 3px 30px;
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

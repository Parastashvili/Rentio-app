import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Turn as Hamburger } from "hamburger-react";
import { Drawer } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ToolOutlined,
  HomeOutlined,
  RollbackOutlined,
  CarOutlined,
  ContactsOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { languages } from "../../languages";
export default function HeaderNavigation({ lang }) {
  const navigate = useNavigate();
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
    getItem(`${languages[lang].menu.home}`, "/", <RollbackOutlined />),
    getItem(`${languages[lang].menu.tools.main}`, "/tools", <ToolOutlined />, [
      getItem(`${languages[lang].menu.tools.electric}`, "/tools/electric"),
      getItem(`${languages[lang].menu.tools.build}`, "/tools/build"),
      getItem(`${languages[lang].menu.tools.cleaning}`, "/tools/cleaning"),
      getItem(`${languages[lang].menu.tools.paint}`, "/tools/paint"),
      getItem(`${languages[lang].menu.tools.handtools}`, "/tools/handtools"),
    ]),
    getItem(
      `${languages[lang].menu.homeandgarden.main}`,
      "/homeandgarden",
      <HomeOutlined />,
      [
        getItem(
          `${languages[lang].menu.homeandgarden.garden}`,
          "/homeandgarden/garden"
        ),
        getItem(
          `${languages[lang].menu.homeandgarden.water}`,
          "/homeandgarden/water"
        ),
        getItem(
          `${languages[lang].menu.homeandgarden.box}`,
          "/homeandgarden/box"
        ),
        getItem(
          `${languages[lang].menu.homeandgarden.gardenfurn}`,
          "/homeandgarden/gardenfurn"
        ),
      ]
    ),
    getItem(`${languages[lang].menu.auto.main}`, "/cars", <CarOutlined />, [
      getItem(`${languages[lang].menu.auto.manipulator}`, "/cars/manipulator"),
      getItem(`${languages[lang].menu.auto.tvitmcleli}`, "/cars/tvitmcleli"),
      getItem(`${languages[lang].menu.auto.trailer}`, "/cars/trailer"),
    ]),
    getItem(`${languages[lang].menu.policy}`, "/terms", <AuditOutlined />),
    getItem(
      `${languages[lang].menu.contact}`,
      "/contact",
      <ContactsOutlined />
    ),
  ];
  const rootSubmenuKeys = ["sub2", "sub3", "sub4"];
  const [openKeys, setOpenKeys] = useState([]);
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
      label: (
        <a href="/tools/electric">{languages[lang].menu.tools.electric}</a>
      ),
      key: "1",
    },
    {
      label: <a href="/tools/build">{languages[lang].menu.tools.build}</a>,
      key: "2",
    },
    {
      label: (
        <a href="/tools/cleaning">{languages[lang].menu.tools.cleaning}</a>
      ),
      key: "3",
    },
    {
      label: <a href="/tools/paint">{languages[lang].menu.tools.paint}</a>,
      key: "4",
    },
    {
      label: (
        <a href="/tools/handtools">{languages[lang].menu.tools.handtools}</a>
      ),
      key: "5",
    },
  ];
  const cars = [
    {
      label: (
        <a href="/cars/manipulator">{languages[lang].menu.auto.manipulator}</a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/cars/tvitmcleli">{languages[lang].menu.auto.tvitmcleli}</a>
      ),
      key: "2",
    },
    {
      label: <a href="/cars/trailer">{languages[lang].menu.auto.trailer}</a>,
      key: "3",
    },
  ];
  const home = [
    {
      label: (
        <a href="/homeandgarden/garden">
          {languages[lang].menu.homeandgarden.garden}
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/homeandgarden/water">
          {languages[lang].menu.homeandgarden.water}
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a href="/homeandgarden/box">
          {languages[lang].menu.homeandgarden.box}
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a href="/homeandgarden/gardenfurn">
          {languages[lang].menu.homeandgarden.gardenfurn}
        </a>
      ),
      key: "4",
    },
  ];
  const onClickNav = (e) => {
    navigate(e.key);
    location.reload();
  };
  return (
    <Nav>
      <div className="classic">
        <Link className="navtext" to="/">
          {languages[lang].menu.home}
        </Link>
        <Dropdown
          menu={{
            items: tools,
          }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Space>
              <Link className="navtext" to="/tools">
                {languages[lang].menu.tools.main}
              </Link>
              <DownOutlined style={{ color: "#ffffff" }} />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items: home,
          }}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Space>
              <Link className="navtext" to="/homeandgarden">
                {languages[lang].menu.homeandgarden.main}
              </Link>
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
              <Link className="navtext" to="/cars">
                {languages[lang].menu.auto.main}
              </Link>
              <DownOutlined style={{ color: "#ffffff" }} />
            </Space>
          </a>
        </Dropdown>
        <Link className="navtext" to="/terms">
          {languages[lang].menu.policy}
        </Link>
        <Link className="navtext" to="/contact">
          {languages[lang].menu.contact}
        </Link>
      </div>
      <Drawer
        title={languages[lang].nav}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Menu
          onClick={onClickNav}
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

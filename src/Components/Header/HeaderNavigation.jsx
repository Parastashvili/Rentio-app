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
  SmileOutlined,
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
    getItem(`${languages[lang].menu.tools.main}`, "tools", <ToolOutlined />, [
      getItem(`${languages[lang].menu.tools.electric}`, "electric"),
      getItem(`${languages[lang].menu.tools.build}`, "contact"),
      getItem(`${languages[lang].menu.tools.cleaning}`, "7"),
      getItem(`${languages[lang].menu.tools.paint}`, "8"),
      getItem(`${languages[lang].menu.tools.handtools}`, "9"),
    ]),
    getItem(
      `${languages[lang].menu.homeandgarden.main}`,
      "sub3",
      <HomeOutlined />,
      [
        getItem(`${languages[lang].menu.homeandgarden.garden}`, "10"),
        getItem(`${languages[lang].menu.homeandgarden.water}`, "11"),
        getItem(`${languages[lang].menu.homeandgarden.box}`, "12"),
        getItem(`${languages[lang].menu.homeandgarden.gardenfurn}`, "13"),
      ]
    ),
    getItem(`${languages[lang].menu.auto.main}`, "sub4", <CarOutlined />, [
      getItem(`${languages[lang].menu.auto.manipulator}`, "14"),
      getItem(`${languages[lang].menu.auto.tvitmcleli}`, "15"),
      getItem(`${languages[lang].menu.auto.trailer}`, "16"),
    ]),
    getItem(`${languages[lang].menu.policy}`, "sub7", <AuditOutlined />),
    getItem(`${languages[lang].menu.contact}`, "sub8", <ContactsOutlined />),
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
      label: `${languages[lang].menu.tools.electric}`,
      key: "1",
    },
    {
      label: `${languages[lang].menu.tools.build}`,
      key: "2",
    },
    {
      label: `${languages[lang].menu.tools.cleaning}`,
      key: "3",
    },
    {
      label: `${languages[lang].menu.tools.paint}`,
      key: "4",
    },
    {
      label: `${languages[lang].menu.tools.handtools}`,
      key: "5",
    },
  ];
  const cars = [
    {
      label: `${languages[lang].menu.auto.manipulator}`,
      key: "1",
    },
    {
      label: `${languages[lang].menu.auto.tvitmcleli}`,
      key: "2",
    },
    {
      label: `${languages[lang].menu.auto.trailer}`,
      key: "3",
    },
  ];
  const home = [
    {
      label: `${languages[lang].menu.homeandgarden.garden}`,
      key: "1",
    },
    {
      label: `${languages[lang].menu.homeandgarden.water}`,
      key: "2",
    },
    {
      label: `${languages[lang].menu.homeandgarden.box}`,
      key: "3",
    },
    {
      label: `${languages[lang].menu.homeandgarden.gardenfurn}`,
      key: "3",
    },
  ];
  const onClick = (e) => {
    navigate(e.key);
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
          <a onClick={(e) => e.preventDefault()}>
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
          <a onClick={(e) => e.preventDefault()}>
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
              <Link className="navtext" to="/car-rental">
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
          onClick={onClick}
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

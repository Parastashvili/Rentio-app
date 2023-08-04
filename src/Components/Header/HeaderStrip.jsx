import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";

const Header = ({ currencySet, currencySignSet, languageSet }) => {
  const [currency, setCurrency] = useState("₾");
  const getLang = localStorage.getItem("language");
  const [lang, setLang] = useState(getLang ? JSON.parse(getLang) : "ka");
  const onClickCur = ({ key }) => {
    setCurrency(key);
    currencySet(1 / 2.6);
    currencySignSet("$");
  };
  const onClickLan = ({ key }) => {
    setLang(key);
    languageSet(key);
  };
  const Currency = [
    {
      label: "₾ - ლარი",
      key: "₾",
    },
    {
      label: "$ - დოლარი",
      key: "$",
    },
  ];
  const Language = [
    {
      label: "ქართული",
      key: "ka",
    },
    {
      label: "ინგლისური",
      key: "en",
    },
    {
      label: "რუსული",
      key: "ru",
    },
  ];
  return (
    <Headmain>
      <div>
        <p className="headertext promo">
          აქ თქვენ შეგიძლიათ იქირაოთ ნებისმიერი თქვენითვის საჭირო ხელსაწყო
          რამდენი ხნითაც გნებავთ
        </p>
        <div className="dropdown">
          <Dropdown
            menu={{
              items: Currency,
              selectable: true,
              defaultSelectedKeys: ["₾"],
              onClick: onClickCur,
            }}
          >
            <Space>
              <p className="headertext">{currency} - ვალუტა</p>
              <DownOutlined style={{ color: "#FFFFFF", marginLeft: "-20px" }} />
            </Space>
          </Dropdown>
          <Dropdown
            menu={{
              items: Language,
              selectable: true,
              defaultSelectedKeys: ["KA"],
              onClick: onClickLan,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <p className="headertext">{lang} - ენა</p>
                <DownOutlined
                  style={{ color: "#FFFFFF", marginLeft: "-20px" }}
                />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </Headmain>
  );
};
export default Header;
const Headmain = styled.div`
  background-color: #393e46;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 10px;
    @media screen and (max-width: 760px) {
      justify-content: center;
    }
    .dropdown {
      min-width: 300px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0px;
    }
  }
  .headertext {
    color: #ffffff;
    font-family: "Noto Sans Georgian", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
  }
  .promo {
    @media screen and (max-width: 760px) {
      display: none;
    }
    @media screen and (max-width: 969px) {
      font-size: 10px;
    }
    @media screen and (max-width: 864px) {
      font-size: 9px;
    }
    @media screen and (max-width: 812px) {
      font-size: 8px;
    }
  }
`;

import React from "react";
import { styled } from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";
export default function Header() {
  const [currency, setCurrency] = useState("₾");
  const [lang, setLang] = useState("KA");
  const onClickCur = ({ key }) => {
    setCurrency(key);
  };
  const onClickLan = ({ key }) => {
    setLang(key);
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
      key: "KA",
    },
    {
      label: "ინგლისური",
      key: "EN",
    },
    {
      label: "რუსული",
      key: "RU",
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
}
const Headmain = styled.div`
  background-color: #393e46;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 10px;
    @media screen and (max-width: 500px) {
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
  }
  .promo {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

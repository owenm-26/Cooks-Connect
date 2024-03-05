import React, { useState } from "react";
import { HomeOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: <a href="./">Home</a>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <a href="./recipes">Recipes</a>,
    key: "recipe",
    icon: <SmileOutlined />,
  },
  {
    label: <a href="./profile">Profile</a>,
    key: "profile",
    icon: <UserOutlined />,
  },
];
const CustomHeader = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default CustomHeader;

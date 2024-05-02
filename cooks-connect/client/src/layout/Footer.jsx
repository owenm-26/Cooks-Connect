import React from "react";
import { Footer } from "antd/es/layout/layout";
import { theme } from "antd";

function CustomFooter() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Footer style={{ textAlign: "center" }}>
      CooksConnect ©{new Date().getFullYear()} Created by Owen Mariani, Steven
      Tran, Arya Daryanani
    </Footer>
  );
}

export default CustomFooter;

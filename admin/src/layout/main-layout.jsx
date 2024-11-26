import React, { useState } from "react";
import {
  BarChartOutlined,
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  MessageOutlined,
  UserOutlined,
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { loadState } from "../config/store";

const { Header, Sider, Content } = Layout;

export const MainLayout = () => {
  const user = loadState("userData");

  if (!user) {
    return <Navigate replace to="/register" />;
  }

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "/app",
      icon: <AppstoreOutlined />,
      label: "Bosh sahifa",
    },
    {
      key: "/app/statistics",
      icon: <BarChartOutlined />,
      label: "Statistika",
    },
    {
      key: "/app/sales",
      icon: <TeamOutlined />,
      label: "Sotuv bo'limi",
    },
    {
      key: "/app/bino",
      icon: <HomeOutlined />,
      label: "Bino",
    },
    {
      key: "/leads",
      icon: <UserOutlined />,
      label: "Lidlar",
    },
    {
      key: "/clients",
      icon: <MessageOutlined />,
      label: "Mijozlar",
    },
    {
      key: "/users",
      icon: <TeamOutlined />,
      label: "Foydalanuvchilar",
    },
    {
      key: "/sms",
      icon: <MessageOutlined />,
      label: "SMS xabarnoma",
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Sozlamalar",
    },
  ];

  return (
    <Layout
      style={{
        height: "100%",
        background: "white", 
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 64,
            margin: 16,
            fontSize: 24,
            fontWeight: "bold",
            color: "#1890ff",
            textAlign: "center",
            lineHeight: "64px",
          }}
        >
          Mijoz
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/app"]}
          onClick={({ key }) => navigate(key)}
          items={menuItems}
          style={{
            background: "white",
            height: "86.6vh",
            borderRight: "none",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

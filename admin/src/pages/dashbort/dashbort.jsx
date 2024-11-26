import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { Bar } from "@ant-design/plots"; // Ant Design grafik komponenti
import { usStaticaGet } from "../../hooks/usStaticaGet";

const { Title, Text } = Typography;

export const Dashbort = () => {
  const { data: stats, isLoading } = usStaticaGet();

  if (isLoading || !stats) return <div>Yuklanmoqda...</div>;

  const chartData = [
    { month: "Feb", value: 80 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 100 },
    { month: "May", value: 110 },
    { month: "Jun", value: 70 },
    { month: "Jul", value: 60 },
    { month: "Aug", value: 85 },
  ];

  const config = {
    data: chartData,
    xField: "value",
    yField: "month",
    seriesField: "month",
    color: "#1890ff",
  };

  return (
    <div style={{ padding: "24px",  height: "78vh", overflowY: "scroll" }}>
      <Title level={3}>Dashboard</Title>
      <Text>Bosh sahifa</Text>

      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col span={16}>
          <Card>
            <Title level={5}>Haftalik statistika</Title>
            <Bar {...config} />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Title level={5}>Bosh sahifa</Title>
            <Title level={2}>{stats.calls}</Title>
            <Text>Bugungi qo'ng'iroqlar</Text>
            <ul style={{ padding: 0, listStyleType: "none", marginTop: "16px" }}>
              <li>
                <Text style={{ color: "#1890ff" }}>• Lidlar</Text>
              </li>
              <li>
                <Text style={{ color: "#52c41a" }}>• Mijozlar</Text>
              </li>
              <li>
                <Text style={{ color: "#fa8c16" }}>• Qo'ng'iroqlar</Text>
              </li>
            </ul>
            <Button type="primary" style={{ marginTop: "16px" }}>
              Yuklab olish
            </Button>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col span={8}>
          <Card>
            <Text>Lidlar</Text>
            <Title level={2}>{stats?.leads?.count}</Title>
            <Text>1 hafta ichida</Text>
            <div style={{ color: "#52c41a", marginTop: "8px" }}>
              +{stats?.leads?.growth}%
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Text>Mijozlar</Text>
            <Title level={2}>{stats?.clients?.count}</Title>
            <Text>1 hafta ichida</Text>
            <div style={{ color: "#ff4d4f", marginTop: "8px" }}>
              {stats?.clients?.growth}%
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Text>Qo'ng'iroqlar</Text>
            <Title level={2}>{stats?.callsGrowth?.count}</Title>
            <Text>1 hafta ichida</Text>
            <div style={{ color: "#52c41a", marginTop: "8px" }}>
              +{stats?.callsGrowth?.growth}%
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

import React, { useState } from "react";
import { Button, Typography, Divider, Table } from "antd";
import { useBinoGet } from "../../hooks/useBinoGet";
import { BinoModal } from "../../components/bino-modal";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export const Bino = () => {
  const { data, isLoading } = useBinoGet();
  const [isModalVisible, setModalVisible] = useState(false);

  const columns = [
    {
      title: "Bino nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Qavat",
      dataIndex: "qavat",
      key: "qavat",
    },
    {
      title: "Xonadonlar",
      dataIndex: "xona",
      key: "xona",
    },
    {
      title: "",
      key: "actions",
      render: (_, record) => {
        console.log("ID:", record.id);
        return<Button type="link" primary>
        <Link to={`/app/malumot/${record.id}`}>Batafsil</Link>
        </Button>
      }
    },
  ];

  const handleCreateBino = (values) => {
    console.log("Yangi bino ma'lumotlari:", values);
    setModalVisible(false);
  };

  if (isLoading) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Title level={3} style={{ marginBottom: 0 }}>
            Binolar
          </Title>
          <Text>Binolar</Text>
        </div>
        <Button
          type="primary"
          onClick={() => setModalVisible(true)}
          style={{ height: "40px" }}
        >
          + Bino yaratish
        </Button>
      </div>

      <div style={{ margin: "30px 0px 0px 0px" }}>
        <Title level={4} style={{ marginBottom: 0 }}>
          Binolar ro’yxati
        </Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Divider />
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          bordered
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </div>

      <BinoModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleCreateBino}
      />
    </div>
  );
};

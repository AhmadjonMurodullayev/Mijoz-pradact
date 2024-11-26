import { Typography, Button, Card, Select } from "antd";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAll } from "../hooks/useGetAll";
import { AddRoomModal } from "./addroom-modal";

const { Title, Text } = Typography;

export const BinoMalumot = () => {
  const { id } = useParams();
  const { data } = useGetAll(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const xonalar = data?.xonalar || [];
  const statusColors = {
    "Bo'sh": "green",
    "Band olingan": "orange",
    Yopiq: "red",
    Sotilgan: "gray",
  };

  const handleAddRoomClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ overflowY: "scroll", height: "78vh", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <Title level={3} style={{ marginBottom: 0 }}>
            {data?.name}
          </Title>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Link to="/app/bino">
              <Text style={{ fontSize: "16px" }}>Binolar</Text>
            </Link>
            <Text>→</Text>
            <Text style={{ fontWeight: "bold", fontSize: "17px" }}>
              Ro’yxat
            </Text>
          </div>
        </div>
        <Select
          showSearch
          placeholder="Qavatni tanlang"
          optionFilterProp="label"
          onChange={(value) => console.log(`Selected ${value}`)}
          options={[
            { value: "Barchasi", label: "Barchasi" },
            { value: "12-qavat", label: "12-qavat" },
            { value: "11-qavat", label: "11-qavat" },
            { value: "10-qavat", label: "10-qavat" },
            { value: "9-qavat", label: "9-qavat" },
            { value: "8-qavat", label: "8-qavat" },
            { value: "7-qavat", label: "7-qavat" },
            { value: "6-qavat", label: "6-qavat" },
            { value: "5-qavat", label: "5-qavat" },
            { value: "4-qavat", label: "4-qavat" },
            { value: "3-qavat", label: "3-qavat" },
            { value: "2-qavat", label: "2-qavat" },
            { value: "1-qavat", label: "1-qavat" },
          ]}
        />
      </div>

      <div>
        <Title>12-qavat</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "16px",
          }}
        >
          {xonalar.map((xona, index) => (
            <div
              key={index}
              style={{
                padding: "16px",
                borderRadius: "8px",
                border: `1px solid #eaeaea`,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: statusColors[xona.status] || "lightgray",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                {xona.status || "Noma'lum"}
              </span>
              <div>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {`${xona.raqam}-xonadon`}
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Qavat: </p>
                    <p> {xona.qavat}</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Podes:</p>
                    <p> {xona.podes}</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>Maydon: </p>
                    <p>{xona.maydon}</p>
                  </div>
                </div>
              </div>
              <Link to={`/xona/${xona.raqam}`} style={{ color: "#1890ff" }}>
                Batafsil
              </Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Button type="primary" onClick={handleAddRoomClick}>
            Qo'shimcha xonadon qo'shish
          </Button>
        </div>
      </div>

      <AddRoomModal data={data} id={id} visible={isModalOpen} onClose={closeModal} />
    </div>
  );
};

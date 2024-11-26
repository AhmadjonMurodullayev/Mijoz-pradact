import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { useXonaPost } from "../hooks/useXonaPost";

export const AddRoomModal = ({ visible, onClose, id,data }) => {
  const [form] = Form.useForm();
  const mutation = useXonaPost(); 

  

  const handleFormSubmit = (values) => {
    console.log("Yangi xonadon ma'lumotlari:", values);
    mutation.mutate(values, {
      onSuccess: () => {
        form.resetFields(); 
        onClose(); 
      },
      onError: (error) => {
        console.error("Xona qo'shishda xatolik:", error);
      },
    });
  };

  return (
    <Modal
      title="Qo'shimcha xonadon qo'shish"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={{ status: "Bo'sh" }}
      >
        <Form.Item
          name="raqam"
          label="Xonadon raqami"
          rules={[{ required: true, message: "Xonadon raqamini kiriting!" }]}
        >
          <Input placeholder="Masalan: 101" />
        </Form.Item>
        <Form.Item
          name="qavat"
          label="Qavat"
          rules={[{ required: true, message: "Qavatni kiriting!" }]}
        >
          <Input placeholder="Masalan: 12" />
        </Form.Item>
        <Form.Item
          name="podes"
          label="Podes"
          rules={[{ required: true, message: "Podesni kiriting!" }]}
        >
          <Input placeholder="Masalan: 2" />
        </Form.Item>
        <Form.Item
          name="maydon"
          label="Maydon"
          rules={[{ required: true, message: "Maydonni kiriting!" }]}
        >
          <Input placeholder="Masalan: 50 m²" />
        </Form.Item>
        <div style={{ textAlign: "right" }}>
          <Button style={{ marginRight: "8px" }} onClick={onClose}>
            Bekor qilish
          </Button>
          <Button type="primary" htmlType="submit" loading={mutation.isLoading}>
            Qo'shish
          </Button>
        </div>
      </Form>
      {mutation.isError && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Xatolik yuz berdi: {mutation.error.message}
        </p>
      )}
    </Modal>
  );
};

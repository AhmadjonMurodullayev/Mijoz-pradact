import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { useBinoPost } from "../hooks/useBinoPost";

export const BinoModal = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const { mutate, isLoading} = useBinoPost(); 

  const handleSubmit = () => {
    form.validateFields()
      .then((values) => {
        mutate(values, {
          onSuccess: () => {
            message.success("Bino muvaffaqiyatli yaratildi");
            onSubmit(values); 
            form.resetFields();
            onClose(); 
          },
          onError: (err) => {
            // Handle error if needed
            console.error("Error submitting form:", err);
          },
        });
      })
      .catch((info) => {
        console.log("Form validation failed:", info);
      });
  };

  return (
    <Modal
      title="Bino yaratish"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Bekor qilish
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit}
          loading={isLoading} 
        >
          Yaratish
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Bino nomi"
          rules={[{ required: true, message: "Iltimos, bino nomini kiriting!" }]}
        >
          <Input placeholder="Bino nomini kiriting" />
        </Form.Item>
        <Form.Item
          name="qavat"
          label="Qavat soni"
          rules={[{ required: true, message: "Iltimos, qavat sonini kiriting!" }]}
        >
          <Input placeholder="Qavat sonini kiriting" type="number" />
        </Form.Item>
        <Form.Item
          name="podes"
          label="Pod'ezdlar soni"
          rules={[{ required: true, message: "Iltimos, pod'ezd sonini kiriting!" }]}
        >
          <Input placeholder="Pod'ezdlar sonini kiriting" type="number" />
        </Form.Item>
        <Form.Item
          name="xona"
          label="Xona soni"
          rules={[{ required: true, message: "Iltimos, xona sonini kiriting!" }]}
        >
          <Input placeholder="Xona sonini kiriting" type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

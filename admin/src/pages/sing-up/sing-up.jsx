import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from "antd";
import "./style.css";
import { useRegister } from "../../service/useRegister";
import { useNavigate } from "react-router-dom";

const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export const SingUp = () => {
  const navigate = useNavigate();
  const { mutate } = useRegister();
  const [form] = Form.useForm();

  const onFinish = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="+998">+998</Option>
        <Option value="+79">+79</Option>
      </Select>
    </Form.Item>
  );




  return (
    <div>

    <div className="sign-up-container">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        className="sign-up-form"
        scrollToFirstError
      >
        <h2 className="sign-up-title">Create Your Account</h2>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input addonBefore={prefixSelector} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            { validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement"))) },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="/">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

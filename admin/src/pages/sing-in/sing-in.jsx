import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./style.css";
import { useLogin } from "../../service/useLogin";
import { useNavigate } from "react-router-dom";
import singin from "../../assets/singin.svg";
export const SingIn = () => {
  const navigate = useNavigate();
  const { mutate } = useLogin();
  const onFinish = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        message.success("Login successfully");
        navigate("/app");
      },
      onError: (error) => {
        console.log(error);
      },
    });
    console.log("Received values of form: ", data);
  };

  return (
    <div className="sign-in-container">
      <div>
        <img src={singin} alt="" />
      </div>
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        className="sign-in-form"
        onFinish={onFinish}
      >
        <h2 className="sign-in-title">Xush kelibsiz</h2>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="input-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="input-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="form-footer">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="/register" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            loading={false}
            block
            type="primary"
            htmlType="submit"
            className="login-button"
          >
            Log in
          </Button>
          <div className="register-link">
            Hali hisobingiz yo'qmi? <a href="/register">  Ro'yxatdan o'tish</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

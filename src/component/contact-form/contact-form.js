import { Button, Form, Input } from "antd";
import React from "react";
import "./contact-form";

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="form1"
      name="basic"
      labelCol={{
        md: 8,
      }}
      wrapperCol={{
        md: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 style={{ color: "red", paddingBottom: "2rem", textAlign: "center" }}>
        Leave a message
      </h1>
      <Form.Item
        style={{ color: "white" }}
        label="Name"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="textArea"
        rules={[
          {
            required: true,
            message: "Please input message!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          md: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ContactForm;

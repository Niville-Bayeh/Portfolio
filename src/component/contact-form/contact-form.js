import { Button, Form, Input } from "antd";
import React from "react";
import "./contact-form.css";

const ContactForm = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
  <div>
    <h3>Leave A Message</h3>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, color: "white" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
        label="Message"
        name="textArea"
        rules={[
          {
            required: true, message: "Please input message!",}
            ,]}
      >
    <textArea style={{width: 300}}/>
    </Form.Item>

    <Form.Item wrapperCol={{ span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
</div>
  );
};
export default ContactForm;

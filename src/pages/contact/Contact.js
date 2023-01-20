import React from "react";
import { Row, Col } from "antd";
import "./contact.css";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import ContactForm from "../../component/contact-form/contact-form";

function Contact() {
  return (
    <>
      <Row>
        <Col md={12} className="contact__page">
          <p className="sm-title">
            <p>Contact Me</p>
          </p>
          <h3 className="sec__title">Let's Discuss About Your Projects</h3>
          <p className="text_1">
            Contact me, let's discuss your project. What you want your project
            to be and how the controls should function.
          </p>
          <div
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            <section className="iconsection">
              <p className="icon-text mb-0">
                <PhoneOutlined />
                +237 672 446 307
              </p>
            </section>
            <div className="iconsection">
              <p className="icon-text">
                <MailOutlined />
                bayehniville@gmail.com
              </p>
            </div>
            <section className="iconsection">
              <p className="icon-text">
                <EnvironmentOutlined />
                Mile-2 Nkwen Bamenda
              </p>
            </section>
          </div>
        </Col>
        <Col
          md={12}
          style={{
            padding: "6rem",
            backgroundColor: "rgb(84, 81, 81)",
            color: "white",
            textAlign: "center",
          }}
        >
          <ContactForm />
        </Col>
      </Row>
    </>
  );
}

export default Contact;

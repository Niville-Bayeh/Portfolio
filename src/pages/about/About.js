import React from "react";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "../../App.css";
import "./about.css";

function About() {
  return (
    <>
      <Row className="about__me">
        <Col md={12} className="about_left">
          <p className="sm-title">About Me</p>
          <h3 className="lg-title">About Me</h3>
          <p className="text">
            Take a good look at this section to read more about me. Feel free to
            download my curriculum vitae.
          </p>
          <img className="about-image" src="./image2.jpg" alt=""></img>
        </Col>
        <Col md={12} className="about_right">
          <section className="contact">
            <p className="a-name">I'm Niville Bayeh</p>
            <p className="a-job">
              A Web Developer From <span className="cam">Cameroon</span>
            </p>
            <p className="text">
              Below is the basic information about me. And the button to
              download my curriculum vitae.
            </p>
            <h3 className="text_2">Personal Information</h3>
            <table>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>Niville Bayeh</td>
                </tr>
                <tr>
                  <th>Age:</th>
                  <td>25</td>
                </tr>
                <tr>
                  <th>Nationality:</th>
                  <td>Cameroonian</td>
                </tr>
                <tr>
                  <th>Freelance:</th>
                  <td>Available</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>Mile-2 Bamenda</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>+237672446307</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>bayehniville@gmail.com</td>
                </tr>
                <tr>
                  <th>Language:</th>
                  <td>English</td>
                </tr>
              </tbody>
            </table>
          </section>
          <Button type="Link" className="btn">
            <DownloadOutlined />
            Download CV
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default About;

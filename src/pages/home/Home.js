import React from "react";
import { Row, Col } from "antd";
import "../../App.css";
import "./home.css";
import About from "../about/About";
import Profile from "../profile/Profile";
import Contact from "../contact/Contact";

function Home() {
  return (
    <>
      <Row className="home">
        <Col md={12}>
          <div className="home__image">
            <img src="/image1.jpg" alt="home" className="image"/>
          </div>
        </Col>
        <Col md={12}>
          <div className="home_right">
            <p className="name">
              <span>Niville Bayeh</span>
            </p>
            <h3 className="job">Web developer</h3>
            <h3 className="location">
              <span>In Cameroon</span>
            </h3>
            <p className="desc">
              I am a developer base on creating user-friendly website. i am
              passionate about building excellent user friendly softwares that
              improves the lives of those around me
            </p>
          </div>
        </Col>
      </Row>
      <About />
      <Profile />
      <Contact />
    </>
  );
}

export default Home;

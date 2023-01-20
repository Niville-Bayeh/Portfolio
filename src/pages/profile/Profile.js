import React from "react";
import { Col, Row, Card } from "antd";
import "./profile.css";

function Profile() {
  const style = {
    background: "#ffff",
  };
  return (
    <>
      <div className="profile__section">
        <p className="sm-title">Educational Profile</p>
        <h3 className="lg-title">Educational Profile</h3>
        <Row gutter={2}>
          <Col className="gutter-row" md={6}>
            <div style={style}>
              <Card title="Default size card">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div style={style}>
              <Card title="Default size card">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div style={style}>
              <Card title="Default size card">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div style={style}>
              <Card title="Default size card">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Profile;

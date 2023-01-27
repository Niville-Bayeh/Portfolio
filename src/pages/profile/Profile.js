import React from "react";
import { Col, Row} from "antd";
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="profile__section">
      <Row>
      <Col md={12}>
      <h3>Educational profile</h3>
      <div>
      <p className="year">2020-2021</p>
        <h4 className="school">University of study</h4>
        <div className="academy">
          <p>National Polytechnic Institute Bamenda</p>
          <p>Telecommunication Engineering</p>
          <p>Bachechelor's of Technology</p>
        </div>
      </div>

      <div>
      <p className="year">2018-2019</p>
        <h4 className="school">University of study</h4>
        <div className="academy">
          <p>Laurate Higher Institute of Business Administration Bamenda</p>
          <p>Information and Communication Technology</p>
          <p>Higher national Diploma in Information and Communication Technology</p>
        </div>
      </div>

      <div>
      <p className="year">2017-2018</p>
        <h4 className="school">College of study</h4>
        <div className="academy">
          <p>Laurate Business College Bamenda</p>
          <p>Networking (CompTia N+)</p>
          <p>Diploma in Computer Networking</p>
        </div>
      </div>

      <div>
      <p className="year">2015-2016</p>
        <h4 className="school">College of study</h4>
        <div className="academy">
          <p>Self-Reliance School of Management, Accounting and computer studies </p>
          <p>Computer hardware Maintainance</p>
          <p>National Diploma in Computer Hardware and Maintenance </p>
        </div>
      </div>

      <div>
      <p className="year">2012-2015</p>
        <h4 className="school">College of study</h4>
        <div className="academy">
          <p>Government Bilingual High School Kumbo</p>
          <p>Advance Level</p>
          <p>General Certificate of Education Advance Level</p>
        </div>
      </div>

      <div>
      <p className="year">2007-2012</p>
        <h4 className="school">College of study</h4>
        <div className="academy">
          <p>Government Bilingual High School Kumbo</p>
          <p>Ordinary Level</p>
          <p>General Certificate of Education Ordinary Level</p>
        </div>
      </div>
      
      
      </Col>
      <Col md={12}>
      <h3>Professional profile</h3>
      <div>
      <p className="year">2021-Present</p>
        <h4 className="school">Organisation</h4>
        <div className="academy">
          <p>Cameroon Baptist Convention</p>
          <p>Software Engineer</p>
          <p>Frontend Developer</p>
        </div>
      </div>
      <h3>Internship profile</h3>
      <div>
      <p className="year">2019-2020</p>
        <h4 className="school">Organisation</h4>
        <div className="academy">
          <p>Tesla Ground Engineering</p>
          <p>Telecommunication Engineer</p>
        </div>
      </div>

      <div>
      <p className="year">2018-2019</p>
        <h4 className="school">Organisation</h4>
        <div className="academy">
          <p>TK Computers</p>
          <p>Networking</p>
          <p>Network Engineer</p>
        </div>
      </div>

      <div>
      <p className="year">2015-2016</p>
        <h4 className="school">Organisation</h4>
        <div className="academy">
          <p>Government Bilingual High School Kumbo</p>
          <p>Computer hardware</p>
          <p>Hardware Technician at the Multimedia Center</p>
        </div>
      </div>

      </Col>
    </Row>
      </div>
    </>
  );
}

export default Profile;

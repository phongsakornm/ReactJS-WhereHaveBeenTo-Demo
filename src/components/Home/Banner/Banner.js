import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Banner from "../../../assets/banner.jpg";
import { Container } from "react-bootstrap";

export class banner extends Component {
  render() {
    return (
      <div style={bannerStyle}>
        <Container>
          <Row>
            <Col>
              <h1>Home</h1>
              <p>This is the site development. It is part of a React JS.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const bannerStyle = {
//   backgroundImage: `url(${Banner})`,
//   height: '100%',
//   backgroundPosition: 'cente',
//   backgroundRepeat: 'noRepea',
//   backgroundSize: 'cover'
};

export default banner;

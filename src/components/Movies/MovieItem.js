import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class MoviesItem extends Component {
  render() {
    const {title, poster, overview} = this.props.movieItem;
    return (
      <Row>
        <Col md={5} xs={12}>
          <img src={poster} style={{width:"100%"}}></img>
        </Col>
        <Col md={7} xs={12}>
          <strong>{title}</strong>
          <p>{overview}</p>
        </Col>
      </Row>
    );
  }
}

export default MoviesItem;

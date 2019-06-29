import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ContentItem extends Component {
  render() {
    const {id, title, shortDetail, lastUpdate, imagesName} = this.props.contentItem;
    return (
      <div>
        <Link to={'/contentDetail?msgId=' + id}>
          <Card.Img variant="top" src={window.location.origin + '/img/connent/' + imagesName} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{shortDetail}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated {lastUpdate} ago</small>
        </Card.Footer>
      </div>
    );
  }
}

export default ContentItem;

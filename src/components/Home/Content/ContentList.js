import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ContentItem from "./ContentItem";

export class ContentList extends Component {
  render() {
    return this.props.contentList.map(item => (
      <div key={item.id}>
        <Card><ContentItem contentItem={item} /></Card>
      </div>
    ));
  }
}

export default ContentList;

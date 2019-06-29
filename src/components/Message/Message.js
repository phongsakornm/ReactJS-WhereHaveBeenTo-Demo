import React, { Component } from "react";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
// import firebase from "firebase";

export class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MessageList db={this.props.db} msgId={this.props.msgId} />
        <hr/>
        <MessageBox db={this.props.db} msgId={this.props.msgId} />
      </div>
    );
  }
}

export default Message;

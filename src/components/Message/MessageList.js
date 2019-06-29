import React, { Component } from "react";
import MessageItem from "./MessageItem"
import _ from 'lodash';

export class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    let app = this.props.db.database().ref("messages"+this.props.msgId);
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messages: messages
    });
  }

  render() {
    let messageNodes = this.state.messages.map(message => {
      return (
        <div className="card" key={message.key}>
          <div className="card-content">
            <MessageItem msgKey={message.key} name={message.name} message={message.message} db={this.props.db} msgId={this.props.msgId} />
          </div>
        </div>
      );
    });
    return <div>{messageNodes}</div>;
  }
}

export default MessageList;

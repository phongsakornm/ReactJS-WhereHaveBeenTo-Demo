import React, { Component } from "react";
import Trim from "trim";
import { Button, Form, Col, Alert } from "react-bootstrap";
import _ from "lodash";
import { resolve, reject } from "q";

export class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
      validated: false,
      showAlert: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeComment(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      let dbCon = this.props.db.database().ref("/messages" + this.props.msgId);
      dbCon.child(this.getDateTime()).set({
        name: Trim(this.state.name),
        email: Trim(this.state.email),
        message: Trim(this.state.message)
      });
      this.setState({ showAlert: true,
        name: "",
        email: "",
        message: "" });
    }
    this.setState({ validated: true });
  }

  getDateTime = () => {
    try {
      var date = _.padStart(new Date().getDate(), 2, "0");
      var month = _.padStart(new Date().getMonth() + 1, 2, "0");
      var year = _.padStart(new Date().getFullYear(), 4, "0");
      var hours = _.padStart(new Date().getHours(), 2, "0");
      var min = _.padStart(new Date().getMinutes(), 2, "0");
      var sec = _.padStart(new Date().getSeconds(), 2, "0");
      return year + "" + month + "" + date + "" + hours + "" + min + "" + sec;
    } catch (e) {
      return e.message;
    }
  };

  render() {
    const { validated } = this.state;
    const handleHide = () => this.setState({ showAlert: false });
    return (
      <div>
        {!this.state.showAlert && (
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control required type="text" 
                  name="name"
                  onChange={this.onChangeName}
                  value={this.state.name}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>อีเมล์</Form.Label>
                <Form.Control required type="email" 
                  name="email"
                  onChange={this.onChangeEmail}
                  value={this.state.email}/>
                  <Form.Control.Feedback type="invalid">
                    เมื่อมีข้อความตอบกลับ จะมีการแจ้งเตือนไปที่อีเมล์
                  </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridComment">
                <Form.Control
                  as="textarea"
                  rows="4"
                  required
                  placeholder="แสดงความคิดเห็นของคุณได้ที่นี่"
                  name="comment"
                  onChange={this.onChangeComment}
                  value={this.state.message}
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">ส่งข้อมูล</Button>
          </Form>
        )}

        <Alert show={this.state.showAlert} variant="success">
          <Alert.Heading>ขอบคุณ</Alert.Heading>
          <p>
            สำหรับทุกความคิดเห็น เมื่อมีข้อความตอบกลับของข้อความคุณ
            จะมีการแจ้งเตือนที่อีเมล์ที่ให้ไว้
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              แสดงความคิดเห็นเพิ่มเติม
            </Button>
          </div>
        </Alert>
      </div>
    );
  }
}

export default MessageBox;

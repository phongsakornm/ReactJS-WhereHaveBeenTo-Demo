import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onChangeAddTodo = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmitAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  };

  render() {
    return (
      <form onSubmit={this.onSubmitAddTodo}>
        <InputGroup className="mb-3">
          <FormControl
            name="title"
            placeholder="กรอกสิ่งที่ต้องทำ"
            aria-describedby="basic-addon2"
            onChange={this.onChangeAddTodo}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">
              เพิ่ม
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    );
  }
}

export default AddTodo;

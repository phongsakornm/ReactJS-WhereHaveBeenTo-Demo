import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodoItem from "./TodoItem.js";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    {/*console.log(this.props.todos)*/}
    return this.props.todoList.map(item => 
      <Container key={item.id}>
        <Row>
          <Col />
          <Col md={7} xs={12}>
            <TodoItem todoItem={item} markComplete={this.props.markComplete} delTodo={this.props.delTodo}></TodoItem>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;

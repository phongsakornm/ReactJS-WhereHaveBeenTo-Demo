import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Loading from '../Layout/Loading'
import Axios from "axios"
import Uuid from "uuid"
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap"

export class Todos extends Component {
  componentDidMount() {
    this.getTodos();
  }

  state = {
    loading: true,
    todos: []
  };

  getTodos = () => {
    var dataArray = [];
    var url = "https://my-json-server.typicode.com/phongsakornm/myjson/todos?userId=1"
    Axios.get(url).then(result => {
      result.data.forEach(item => {
        dataArray.push(item);
      });
      this.setState({ todos: dataArray })
      this.setState({ loading: false });
    });
  };

  //Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: Uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container style={styleContainer}>
          {this.state.loading ? <Loading />
            :
            <div>
              <Row>
                <Col />
                <Col md={7} xs={12}>
                  <AddTodo addTodo={this.addTodo} />
                </Col>
                <Col />
              </Row>
              <Row>
                <TodoList
                  todoList={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </Row>
            </div>
          }
        </Container>
      </React.Fragment>
    )
  }
}

const styleContainer = {
  paddingTop: '20px',
  paddingBottom: '50px'
}

export default Todos

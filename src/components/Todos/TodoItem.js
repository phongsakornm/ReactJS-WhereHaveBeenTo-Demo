import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  Badge
} from "react-bootstrap";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.todoItem.completed ?
        '#FF3333' : '#66ff66',
      textDecoration: this.props.todoItem.completed ?
        'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todoItem;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {' '}
          {title}
          <Badge pill variant="danger" style={{ float: 'right', padding: 6 }}
            onClick={this.props.delTodo.bind(this, id)}>X</Badge>
        </p>
      </div>
    )
  }
}

// **Set Style
// const itemStyle = {
//   backgroundColor:'#f4f4f4'
// }

//PropTypes
TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

export default TodoItem
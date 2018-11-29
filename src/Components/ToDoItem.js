import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ToDoItem extends Component {

  constructor(){
    super();
    this.state = {
      todos:[]
    }
  }



  render() {
    return (
      <div>
        <ListGroupItem>{this.props.todo.value}</ListGroupItem>
      </div>
    );
  }
}

export default ToDoItem;

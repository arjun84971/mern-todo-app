import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import  ToDoItem  from './ToDoItem';

class AllToDos extends Component {
  render() {
    let todos;
    if(this.props.todos){
        console.log(this.props.todos)
        todos = this.props.todos.map(todo => {
            return(
                <div>
                    <ToDoItem todo={todo} key={todo.id} />
                </div>
            );
        })
    }

    return (
        <div>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <br />
                    <ListGroup>
                        {todos}
                    </ListGroup>

                </Col>
            </Row>
        </div>
    );
  }
}

export default AllToDos;

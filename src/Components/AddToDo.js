import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';


class AddToDo extends Component {

  constructor(){
    super();
    this.state = {
        todo : {}
    }
  }
  addToDo(e){
      e.preventDefault();
      if(this.refs.todo.value === ''){
          alert("Can not Enter Blank Value");
      } else {
        this.setState({todo:{
            name: this.refs.todo.value
        }})
        console.log(this.refs)
        console.log(this.refs.todo.value)
        this.props.addtodo(this.state.todo);
      }
  }
  render() {
    return (
        <div>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Form onSubmit={this.addToDo.bind(this)}>
                        <FormGroup tag="fieldset">
                            <br />
                            <Input type="text" ref="todo" placeholder="Add ToDo to the list here" />
                        </FormGroup>
                        <input type="submit" value="Submit" />
                    </Form>
                </Col>
          </Row>
        </div>

    );
  }
}

export default AddToDo;

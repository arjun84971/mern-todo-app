import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import uuid from 'uuid';

class AddToDo extends Component {

  constructor(){
    super();
    this.state = {value: '', id : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, id: uuid.v4()});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.value === ''){
        alert("Can not Enter Blank Value");
    } else {
      this.setState({todo:{
          id: uuid.v4(),
          name: event.target.value
      }});
      this.props.addtodo(this.state);
    }
  }


  render() {
    return (
        <div>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup tag="fieldset">
                            <br />
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </FormGroup>
                        <input type="submit" value="Add" />
                    </Form>
                </Col>
          </Row>
        </div>

    );
  }
}

export default AddToDo;

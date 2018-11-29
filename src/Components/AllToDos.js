import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Row, Col } from 'reactstrap';

class AllToDos extends Component {
  render() {
    return (
        <div>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <br />
                    <ListGroup>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
  }
}

export default AllToDos;

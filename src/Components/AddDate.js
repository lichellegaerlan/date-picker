import React from 'react';

import './Landing.css';

import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <div className="landing">
            <Container>
                <Row>
                    <Col>
                        <h1>Add a new date idea</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
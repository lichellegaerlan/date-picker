import React from 'react';

import './Landing.css';

import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <div className="landing">
            <Container>
                <Row>
                    <Col>
                        <h1>What kind of date do you want to go on?</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
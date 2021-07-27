import React from 'react';

import './Landing.css';

import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <div>
            <Container>
                <Row>
                    What would you like to do?
                </Row>

                <Row>
                    <Col>
                        <button className="pls">Pick Date</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
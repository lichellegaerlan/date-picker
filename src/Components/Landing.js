import React from 'react';

import './Landing.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <div className="landing">
            <Container>
                <Row>
                    <Col>
                        <h1>Choose an option</h1>
                        <br/><br/>
                        <Link to="/choose"><button className="pls">Pick Date</button></Link>
                        <br/><br/>
                        <Link to="/add"><button className="pls">Add Date</button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
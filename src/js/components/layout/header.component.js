import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export class HeaderComponent extends React.Component{
    render(){
        return (<header className='header'>
            <Container>
                <Row>
                    <Col md={12}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacts Us</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>)
    }
}
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export class HeaderComponent extends React.Component{
    render(){
        return (<header className='header'>
            <Container>
                <Row>
                    <Col md={12}>
                        header text
                    </Col>
                </Row>
            </Container>
        </header>)
    }
}
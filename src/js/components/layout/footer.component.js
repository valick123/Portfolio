import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export class FooterComponent extends React.Component{
    render(){
        return(<footer className='footer'>
            <Container>
                <Row>
                    <Col md={12}>
                        footer text
                    </Col>
                </Row>
            </Container>
        </footer>)
    }
}
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export class NoMatchPageComponent extends React.Component{
    render(){
        console.log(this.props)
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Page not found {this.props.location.pathname} </h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
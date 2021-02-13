import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export class HomePageComponent extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col md={12}>
                        homePageText
                    </Col>
                </Row>
            </Container>
        )
    }
}
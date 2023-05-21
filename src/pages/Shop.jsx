import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BrandBar from '../components/brandBar/BrandBar';
import PartList from '../components/partList/PartList';
import TypeBar from '../components/typeBar/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <PartList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;

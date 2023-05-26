import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BrandBar from '../components/brandBar/BrandBar';
import PartList from '../components/partList/PartList';
import TypeBar from '../components/typeBar/TypeBar';
import { fetchBrands, fetchParts, fetchTypes } from '../http/partAPI';

const Shop = observer(() => {
    const {part} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => part.setTypes(data));
        fetchBrands().then(data => part.setBrands(data));
        fetchParts().then(data => part.setParts(data.rows));
    }, []);

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
});
export default Shop;

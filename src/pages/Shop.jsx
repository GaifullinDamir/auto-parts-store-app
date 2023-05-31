import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/brandBar/BrandBar';
import Pages from '../components/Pages';
import PartList from '../components/partList/PartList';
import TypeBar from '../components/typeBar/TypeBar';
import { fetchBrands, fetchParts, fetchTypes } from '../http/partAPI';

const Shop = observer(() => {
    const {part} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => part.setTypes(data));
        fetchBrands().then(data => part.setBrands(data));
        fetchParts(null, null, 1, 3).then(data => {
            part.setParts(data.rows);
            part.setTotalCount(data.count);
        });
    }, []);

    useEffect(() => {
        fetchParts(part.selectedType.id, part.selectedBrand.id, part.page, part.limit).then(data => {
            part.setParts(data.rows);
            part.setTotalCount(data.count, part.selectedType, part.selectedBrand);
        });
    }, [part.page, ])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <PartList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});
export default Shop;

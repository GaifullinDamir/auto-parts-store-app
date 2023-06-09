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
        fetchParts(null, null, 1, 4).then(data => {
            part.setParts(data.parts);
            part.setTotalCount(data.count);
        });
    }, []);

    useEffect(() => {
        fetchParts(part.selectedType._id, part.selectedBrand._id, part.page, part.limit).then(data => {
            part.setParts(data.parts);
            part.setTotalCount(data.count);
        });
    }, [part.page, part.selectedType._id, part.selectedBrand._id])

    console.log(part.totalCount)

    return (
        <Container style={{minHeight:'100vh'}}>
            <Row className='mt-3 h-100'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9} className='d-flex flex-column'>
                    <BrandBar/>
                    <PartList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});
export default Shop;

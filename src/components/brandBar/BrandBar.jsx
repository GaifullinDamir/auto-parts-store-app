import React, {useContext} from 'react';
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {part} = useContext(Context);
    return (
        <Row className='d-flex justify-content-center'>
            {part.brands.map(brand => {
                return(
                    <Card
                        style={{cursor:'pointer'}}
                        onClick={() => part.setSelectedBrand(brand)}
                        border={brand._id === part.selectedBrand._id ? 'primary' : 'light'}
                        key={brand._id}
                        className='mx-1 pd-3 w-auto'
                    >
                        {brand.name}
                    </Card>
                )
            })}
        </Row>
        
    );
});

export default BrandBar;

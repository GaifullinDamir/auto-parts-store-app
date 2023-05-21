import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../../assets/ant-design_star-outlined.png';

const PartItem = ({part}) => {
    return (
        <Col className='mt-5 d-flex justify-content-center' md={3}>
            <Card style={{width: 150, cursor:'pointer'}} border={'light'}>
                <Image width={150} height={150} src={part.img}/>
                <div className='mt-2 d-flex justify-content-between align-tems-center'>
                    <div style={{color:'#aaaaaa'}}>Michelin...</div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-1'>{part.rating}</div>
                        <Image width={17} height={17} src={star}/>
                    </div>
                </div>
                <div>{part.name}</div>
            </Card>
        </Col>
    );
};

export default PartItem;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../../assets/ant-design_star-outlined.png';
import {useNavigate} from 'react-router-dom';
import { PART_ROUTE } from '../../utils/consts';

const PartItem = ({part}) => {
    const navigate = useNavigate();

    return (
        <Col className='mt-5 d-flex justify-content-center' md={3} onClick={() => navigate(PART_ROUTE + '/' + part._id)}>
            <Card style={{width: 150, cursor:'pointer'}} border={'light'}>
                <Image style={{ 'objectFit': 'contain'}} width={200} height={200} src={process.env.REACT_APP_API_URL + part.imgUrl}/>
                <div className='mt-2 d-flex justify-content-between align-items-center'>
                    <div style={{color:'#aaaaaa'}}>Michelin...</div>
                    
                </div>
                <div>{part.name}</div>
                <div><span style={{fontWeight: '600'}}>{part.price} руб.</span></div>
            </Card>
        </Col>
    );
};

export default PartItem;
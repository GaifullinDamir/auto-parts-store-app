import React from 'react';
import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';

const AdminBasketPartItem = ({bpart, deleteBpart}) => {

    return (
        <Col className='mt-5 mx-3 mb-2 d-flex justify-content-center' md={3}>
            <Card 
                className='d-flex flex-column align-items-center'
                style={{width: 250, cursor:'pointer'}} border={'light'}>
                <Image style={{margin: '0 auto', 'objectFit': 'contain'}} width={250} height={300} src={process.env.REACT_APP_API_URL + bpart.part.imgUrl}/>
                <div><span style={{fontSize: '20px', fontWeight: '200'}}>{bpart.fullname}</span></div>
                <div><span style={{fontSize: '20px', fontWeight: '200'}}>{bpart.address}</span></div>
                <div><span style={{fontSize: '20px', fontWeight: '200'}}>{bpart.phoneNumber}</span></div>
                <div className='mt-2 d-flex justify-content-between align-items-center'>
                    <div style={{color:'#aaaaaa'}}>{bpart.part.name}</div>
                </div>
                <div><span style={{fontSize: '20px', fontWeight: '400'}}>{bpart.part.price} руб.</span></div>
                <Button 
                    className='mt-1'
                    variant='outline-dark' 
                    style ={{width:'50%'}}
                    onClick={() => deleteBpart(bpart._id)}
                    >
                        Обработать
                </Button>

            </Card>
        </Col>
        
    );
};

export default AdminBasketPartItem;
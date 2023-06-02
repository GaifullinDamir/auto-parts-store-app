import React from 'react';
import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';

const BasketItem = ({bpart, setIsCreateBasketPartVisible, deleteBPart, setClickedPartId, orderIsPaid}) => {

    return (
        <Col className='mt-5 d-flex justify-content-center' md={3} onClick={() => setClickedPartId(bpart._id)}>
            <Card 
                className='d-flex flex-column align-items-center'
                style={{width: 250, cursor:'pointer'}} border={'light'}>
                <Image style={{margin: '0 auto', 'objectFit': 'contain'}} width={250} height={300} src={process.env.REACT_APP_API_URL + bpart.part.imgUrl}/>
                <div className='mt-2 d-flex justify-content-between align-items-center'>
                    <div style={{color:'#aaaaaa'}}>{bpart.part.name}</div>
                </div>
                <div><span style={{fontSize: '20px', fontWeight: '400'}}>{bpart.part.price} руб.</span></div>

                {
                    !orderIsPaid ?
                    <>
                    <Button 
                        className='mt-1'
                        variant='outline-dark' 
                        style ={{width:'50%'}}
                        onClick={() => setIsCreateBasketPartVisible(true)}
                        >
                            Оплатить
                    </Button>
                    <Button 
                        className='mt-2'
                        variant='outline-dark' 
                        style ={{width:'50%'}}
                        onClick={() => deleteBPart(bpart._id)}
                        >
                            Отказаться
                    </Button>
                    </>
                    :

                    null
                }

            </Card>
        </Col>
        
    );
};

export default BasketItem;
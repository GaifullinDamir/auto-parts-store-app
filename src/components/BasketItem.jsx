import React from 'react';
import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';

const BasketItem = ({part, setIsCreateBasketPartVisible}) => {
    return (
        <Card 
            className='d-flex flex-column align-items-center'
            style={{width: 250, cursor:'pointer'}} border={'light'}>
            <Image style={{margin: '0 auto', 'objectFit': 'contain'}} width={250} height={300} src={process.env.REACT_APP_API_URL + part.imgUrl}/>
            <div className='mt-2 d-flex justify-content-between align-items-center'>
                <div style={{color:'#aaaaaa'}}>{part.name}</div>
            </div>
            <div>{part.price}</div>

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
                >
                    Отказаться
            </Button>
        </Card>
    );
};

export default BasketItem;
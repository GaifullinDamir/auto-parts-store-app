import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import bmw from '../assets/bmw.jpg';
import CreateBasketPart from '../components/modals/CreateBasketPart';

const Basket = observer(() => {
    const {basket, part, user} = useContext(Context);
    const [isCreateBasketPartVisible, setIsCreateBasketPartVisible] = useState(false);

    return (
        <Row className='d-flex'>
            <Col className='mt-5 d-flex justify-content-center' md={3} >
                <Card 
                    className='d-flex flex-column align-items-center'
                    style={{width: 250, cursor:'pointer'}} border={'light'}>
                    <Image style={{margin: '0 auto', 'object-fit': 'contain'}} width={250} height={300} src={bmw}/>
                    <div className='mt-2 d-flex justify-content-between align-tems-center'>
                        <div style={{color:'#aaaaaa'}}>Фара левая для BMW 3 F30 2011-2018 63117419633</div>
                    </div>
                    <div>Фара левая для BMW 3 F30</div>

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
            </Col>
            <CreateBasketPart show={isCreateBasketPartVisible} onHide={() => setIsCreateBasketPartVisible(false)}/>
        </Row>
    );
});

export default Basket;
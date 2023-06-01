import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBasketParts } from '../http/basketAPI';
import bmw from '../assets/bmw.jpg';
import CreateBasketPart from '../components/modals/CreateBasketPart';
import BasketItem from '../components/BasketItem';

const Basket = observer(() => {
    const {basket, part, user} = useContext(Context);
    const [parts, setParts] = useState([]);
    const [isCreateBasketPartVisible, setIsCreateBasketPartVisible] = useState(false);
    
    useEffect(() => {
        try{
            console.log(basket.id)
            fetchBasketParts(basket.id).then(data => {
                setParts(data);
                basket.setBasketParts(data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    // useEffect(() => {

    // }, [basket.basketParts]);

    return (
        <Row className='d-flex mb-5'>
            {/* <Col className='mt-5 d-flex justify-content-center' md={3} >
                
            </Col> */}
            {parts.map(part => {
                    return(
                        <BasketItem key={part._id} part={part.part} setIsCreateBasketPartVisible={setIsCreateBasketPartVisible}/>
                    )
                })}
            <CreateBasketPart show={isCreateBasketPartVisible} onHide={() => setIsCreateBasketPartVisible(false)}/>
        </Row>
    );
});

export default Basket;
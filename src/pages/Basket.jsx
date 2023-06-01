import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import jwt_decode from 'jwt-decode';
import { fetchBasketParts, fetchBasket } from '../http/basketAPI';
import { check } from '../http/userAPI';
import bmw from '../assets/bmw.jpg';
import CreateBasketPart from '../components/modals/CreateBasketPart';
import BasketItem from '../components/BasketItem';

const Basket = observer(() => {
    const {basket, part, user} = useContext(Context);
    const [basketId, setBasketId] = useState('');
    const [parts, setParts] = useState([]);
    const [isCreateBasketPartVisible, setIsCreateBasketPartVisible] = useState(false);
    
    useEffect(() => {
        try{
            check().then(data => {
                const uid = jwt_decode(data)._id;
                fetchBasket(uid).then(bsk => {
                    basket.setId(bsk._id);
                }).then(() => {
                    fetchBasketParts(basket.id).then(data => {
                        setParts(data);
                        basket.setBasketParts(data);
                    });
            });
            });
            
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <Row className='d-flex mb-5'>
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
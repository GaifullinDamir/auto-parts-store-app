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
    // const [basketId, setBasketId] = useState('');
    const [clickedPartId, setClickedPartId] = useState('');
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
    }, [parts]);

    return (
        <Row className='d-flex mb-5'>
            {parts.map(bpart => {
                if(!bpart.orderIsPaid){
                    return(
                        <BasketItem key={part._id} bpart={bpart} setClickedPartId={setClickedPartId} setIsCreateBasketPartVisible={setIsCreateBasketPartVisible}/>
                    )
                }
                return null;
                    
            })}
            <CreateBasketPart show={isCreateBasketPartVisible} clickedPartId={clickedPartId} onHide={() => setIsCreateBasketPartVisible(false)}/>
        </Row>
    );
});

export default Basket;
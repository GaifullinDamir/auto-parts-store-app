import { Row, Col, Card, Image, Button, Container } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import jwt_decode from 'jwt-decode';
import { fetchBasketParts, fetchBasket, deleteBasketPart } from '../http/basketAPI';
import { check } from '../http/userAPI';
import CreateBasketPart from '../components/modals/CreateBasketPart';
import BasketItem from '../components/BasketItem';

const Basket = observer(() => {
    const {basket, part} = useContext(Context);
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
    }, [clickedPartId]);

    const deleteBPart = async (clickedPartId) => {
        try{
            await deleteBasketPart(clickedPartId).then(data => {
                if(data.success === true){
                    alert('Заказ отменен.');
                }
            })
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
        <Row className='d-flex mb-5'>
            <div style={{textAlign:'center'}}><span style={{fontSize:'35px', fontWeight:'500'}}>Ожидают оплаты</span></div>
            <hr/>
            {parts.map(bpart => {
                if(!bpart.orderIsPaid){
                    return(
                        <BasketItem 
                            key={bpart._id} 
                            bpart={bpart} 
                            orderIsPaid={false}
                            deleteBPart={deleteBPart}
                            setClickedPartId={setClickedPartId} 
                            setIsCreateBasketPartVisible={setIsCreateBasketPartVisible}/>
                    )
                }
                return null;
                    
            })}
        </Row>
        <Row className='d-flex mb-5'>
            <div  style={{textAlign:'center'}}><span style={{fontSize:'35px', fontWeight:'500'}}>Оплачены</span></div>
            {parts.map(bpart => {
                if(bpart.orderIsPaid){
                    return(
                        <BasketItem 
                            key={bpart._id} 
                            bpart={bpart} 
                            orderIsPaid={true}
                            setClickedPartId={setClickedPartId} 
                            
                            setIsCreateBasketPartVisible={setIsCreateBasketPartVisible}/>
                    )
                }
                return null;
                    
            })}
        </Row>
        <CreateBasketPart 
                show={isCreateBasketPartVisible} 
                clickedPartId={clickedPartId} 
                onHide={() => setIsCreateBasketPartVisible(false)}/>
        </>
    );
});

export default Basket;
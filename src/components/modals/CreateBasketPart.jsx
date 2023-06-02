import React, {useState, useEffect, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { updateBasketPart, fetchOneBasketPart } from '../../http/basketAPI';

const CreateBasketPart = observer(({show, onHide, clickedPartId}) => {
    const [fullname, setFullname] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [address, setAddress] = useState(''); 

    const changeBasketPart = async() => {
        await fetchOneBasketPart(clickedPartId).
            then(data => {
                setBpart(data);
                const obj = {
                    fullname,
                    phoneNumber,
                    address,
                    orderIsPaid: true,
                    basket: data.basket,
                    part: data.part,
                }
                console.log(obj);
                updateBasketPart(data._id, obj)
                    .then(data => {
                        onHide();
                    })
            })
        
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Оплатить заказ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control 
                    value={fullname}
                    className='mt-2 mx-1'
                    onChange={e => setFullname(e.target.value)}
                    placeholder={'ФИО заказчика'}></Form.Control>
                <Form.Control 
                    value={phoneNumber}
                    className='mt-2 mx-1'
                    onChange={e => setPhoneNumber(e.target.value)}
                    placeholder={'Номер телефона'}></Form.Control>
                <Form.Control 
                    value={address}
                    className='mt-2 mx-1'
                    onChange={e => setAddress(e.target.value)}
                    placeholder={'Адрес'}></Form.Control>
                <Form.Control 
                    className='mt-2 mx-1'
                    placeholder={'Номер карты'}></Form.Control>
                <Form.Control 
                    className='mt-2 mx-1'
                    placeholder={'CVV'}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-dark'} onClick={changeBasketPart} >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBasketPart;
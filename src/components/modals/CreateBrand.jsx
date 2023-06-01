import React, {useContext, useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/partAPI';
import { fetchBrands, fetchTypes } from '../../http/partAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const CreateBrand = observer(({show, onHide}) => {
    const {part} = useContext(Context);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetchTypes().then(data => part.setTypes(data));
        fetchBrands().then(data => part.setBrands(data));
    }, []);

    const addBrand = () => {
        createBrand({name: value})
            .then(data => {
                setValue('');
                fetchBrands().then(data => part.setBrands(data));
                onHide();
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
                Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={'Название бренда'}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-dark'} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBrand;
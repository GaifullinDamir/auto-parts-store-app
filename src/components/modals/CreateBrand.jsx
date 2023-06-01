import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/partAPI';

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({name: value})
            .then(data => {
                setValue('');
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
};

export default CreateBrand;
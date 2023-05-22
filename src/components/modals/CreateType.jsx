import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

const CreateType = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Добавить тип запчасти
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control 
                    placeHolder={'Название типа'}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-dark'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
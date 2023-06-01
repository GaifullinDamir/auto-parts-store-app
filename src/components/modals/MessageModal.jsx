import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

const MessageModal = ({show, onHide, message}) => {
    const [value, setValue] = useState('');

    return (
        <Modal
            show={show}
            size="md"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Сообщение
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p style={{textAlign: 'center', fontWeight: '400', textSize: '25px'}}>{message}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MessageModal;
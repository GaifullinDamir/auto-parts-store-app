import React, {useState, useEffect, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createType } from '../../http/partAPI';
import { fetchBrands, fetchTypes } from '../../http/partAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const CreateType = observer(({show, onHide}) => {
    const [value, setValue] = useState('');

    const {part} = useContext(Context);
    
    useEffect(() => {
        fetchTypes().then(data => part.setTypes(data));
        fetchBrands().then(data => part.setBrands(data));
    }, []);

    const addType = () => {
        createType({name: value})
            .then(data => {
                setValue('');
                fetchTypes().then(data => part.setTypes(data));
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
                Добавить тип запчасти
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={'Название типа'}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-dark'} onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateType;
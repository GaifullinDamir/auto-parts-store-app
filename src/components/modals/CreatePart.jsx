import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreatePart = ({show, onHide}) => {
    const {part} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
        console.log(info);
    }

    const removeInfo= (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

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
                <Container className='d-flex justify-content-start'>
                    <Dropdown className='mt-3 me-3'>
                        <Dropdown.Toggle variant='outline-dark'>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {part.types.map(type => {
                                return(
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3 mb-3'>
                        <Dropdown.Toggle variant='outline-dark' >Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {part.brands.map(brand => {
                                return(
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Form.Control
                    className='mt-3'
                    placeholder='Введите название запчасти'/>
                <Form.Control
                    className='mt-3'
                    placeholder='Введите стоимость'
                    type='number'/>
                <Form.Control
                    className='mt-3 mb-3'
                    type='file'/>
                <hr/>

                <Button
                    variant='outline-dark'
                    onClick={addInfo}
                    >Добавить новое свойство
                </Button>
                {
                    info.map(i =>{
                        return(
                            <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control 
                                        placeholder='Название характеристики'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control 
                                        placeholder='Описание свойства свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button 
                                    variant={'outline-dark'}
                                    onClick={() => removeInfo(i.number)}>
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-dark'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePart;
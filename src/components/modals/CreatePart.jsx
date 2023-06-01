import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createPart, uploadFile } from '../../http/partAPI';

const CreatePart = observer(({show, onHide}) => {
    const {part} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null); 
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
        console.log(info);
    };

    const removeInfo= (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const addPart = async() => {

        const imgUrl = await uploadFile(file);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('imgUrl', imgUrl);
        formData.append('brandId', part.selectedBrand.id);
        formData.append('typeId', part.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createPart(formData).then((data) => onHide);
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
                <Container className='d-flex justify-content-start'>
                    <Dropdown className='mt-3 me-3'>
                        <Dropdown.Toggle variant='outline-dark'>{part.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu> 
                            {part.types.map(type => {
                                return(
                                    <Dropdown.Item 
                                        onClick={() => part.setSelectedType(type)} 
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3 mb-3'>
                        <Dropdown.Toggle variant='outline-dark' >{part.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {part.brands.map(brand => {
                                return(
                                    <Dropdown.Item 
                                        onClick={() => part.setSelectedBrand(brand)} 
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='mt-3'
                    placeholder='Введите название запчасти'/>
                <Form.Control
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className='mt-3'
                    placeholder='Введите стоимость'
                    type='number'/>
                <Form.Control
                    onChange={selectFile}
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
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder='Название характеристики'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control 
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant={'outline-dark'} onClick={addPart}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePart;
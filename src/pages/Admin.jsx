import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import CreateBrand from '../components/modals/CreateBrand';
import CreatePart from '../components/modals/CreatePart';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [isBrandVisible, setIsBrandVisible] = useState(false);
    const [isTypeVisible, setIsTypeVisible] = useState(false);
    const [isPartVisible, setIsPartVisible] = useState(false);

    return (
        <Container className='d-flex flex-column align-items-center'>
            <Button 
                variant={'outline-dark'} 
                className='mt-4 p-2 w-50'
                onClick={() => setIsTypeVisible(true)}
                >
                Добавить тип
            </Button>
            <Button 
                variant={'outline-dark'} 
                className='mt-4 p-2 w-50'
                onClick={() => setIsBrandVisible(true)}
                >
                Добавть бренд
            </Button>
            <Button 
                variant={'outline-dark'} 
                className='mt-4 p-2 w-50'
                onClick={() => setIsPartVisible(true)}
                >
                Добавить запчасть
            </Button>
            <CreateType show={isTypeVisible} onHide={() => setIsTypeVisible(false)}/>
            <CreateBrand show={isBrandVisible} onHide={() => setIsBrandVisible(false)}/>
            <CreatePart show={isPartVisible} onHide={() => setIsPartVisible(false)}/>
        </Container>
    );
};

export default Admin;
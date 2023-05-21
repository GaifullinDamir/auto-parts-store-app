import React from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(location);

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
            >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='text-center'>{isLogin? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='email'
                        />
                    <Form.Control
                        className='mt-3'
                        placeholder='password'
                        />

                    <Row className="d-flex justify-content-between align-items-center mt-3 px-3">
                        {isLogin?
                        <div className='w-auto'>
                            <span>Нет аккаунта?{'\t'}</span>
                            <NavLink to={REGISTRATION_ROUTE} style={{color:'#000000'}}>Регистрация</NavLink>
                        </div>
                        :
                        <div className='w-auto'>
                            <span>Есть аккаунт?{'\t'}</span>
                            <NavLink to={LOGIN_ROUTE} style={{color:'#000000'}}>Войти</NavLink>
                        </div>
                        }               
                        <Button 
                            className='mt-3 w-auto' 
                            variant='outline-success'>
                            {isLogin? 'Войти':'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
            
        </Container>
    );
};

export default Auth;

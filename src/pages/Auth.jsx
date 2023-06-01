import { observer } from 'mobx-react-lite';
import React, {useContext, useState} from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { Context } from '..';
import { createBasket, fetchBasket } from '../http/basketAPI';
import { checkAdminRole, login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';


const Auth = observer (() => {
    const {user, basket} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authentificate = async () => {
        try{
            let data;
            if(isLogin) {
                data = await login(email, password);
                
                user.setId(data._id);
            } else {
                data = await registration(email, password);
                console.log('basket');
                    if(!basket.basket) {
                        await createBasket().then(basketData => {
                            basket.setBasket(basketData);
                        });
                        // console.log(basket);
                    }
            }
            user.setUser(user);
            user.setIsAuth(true);
            user.setIsAdmin(checkAdminRole());
            await fetchBasket(user.id).then(bsk => {
                console.log(bsk);
                basket.setId(bsk._id);
            });

            // console.log(user);
            navigate(SHOP_ROUTE);
        }catch(e){
            alert(e);
        }
    }

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <Form.Control
                        className='mt-3'
                        placeholder='password'
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
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
                            variant='outline-success'
                            onClick={authentificate}
                            >
                            {isLogin? 'Войти':'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
            
        </Container>
    );
});

export default Auth;

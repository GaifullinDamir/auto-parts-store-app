import React, { useContext } from 'react';
import { Context } from '..';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';

import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts';

import {observer} from 'mobx-react-lite';

const StoreNavbar = observer(() => {
    const {user, basket} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        basket.setId(null);
        localStorage.clear();
        navigate(LOGIN_ROUTE);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink to={SHOP_ROUTE} style={{color:'#ffffff', textDecoration:'none', fontSize:'30px'}}>Bayerisch</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    {user.isAdmin ?
                        <Button 
                            variant='outline-light' 
                            onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель
                        </Button>
                    :
                        <Button 
                            variant='outline-light' 
                            onClick={() => navigate(BASKET_ROUTE)}
                            >
                                Корзина
                        </Button>
                    }
                    
                    <Button 
                        variant='outline-light' 
                        className = 'ms-3' 
                        onClick={() => logOut()}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
        }
            </Container>
        </Navbar>
    );
});

export default StoreNavbar;
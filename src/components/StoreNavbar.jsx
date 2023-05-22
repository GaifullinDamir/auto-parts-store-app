import React, { useContext } from 'react';
import { Context } from '..';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';

import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import {observer} from 'mobx-react-lite';

const StoreNavbar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink to={SHOP_ROUTE} style={{color:'#ffffff', textDecoration:'none'}}>Bayerisch</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button 
                        variant='outline-light' 
                        onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                    </Button>
                    <Button 
                        variant='outline-light' 
                        className = 'ms-3' 
                        onClick={() => {
                            navigate(LOGIN_ROUTE);
                            user.setIsAuth(false);
                        }}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
        }
            </Container>
        </Navbar>
    );
});

export default StoreNavbar;
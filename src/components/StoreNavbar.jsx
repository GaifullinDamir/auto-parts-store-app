import React, { useContext } from 'react';
import { Context } from '..';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

import {observer} from 'mobx-react-lite';

const StoreNavbar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink to={SHOP_ROUTE} style={{color:'#ffffff', textDecoration:'none'}}>Bayerisch</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button variant='outline-light'>Админ панель</Button>
                    <Button variant='outline-light' className = 'ms-3' onClick={() => user.setIsAuth(false)}>Выйти</Button>
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
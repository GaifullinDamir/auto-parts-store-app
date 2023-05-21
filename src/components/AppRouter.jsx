import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>{
                return(
                    <Route key={path} path={path} element={<Component/>} exact/>
                )
            })}
            {publicRoutes.map(({path, Component}) =>{
                return(
                    <Route key={path} path={path} element={<Component/>} exact/>
                )
            })}
        </Routes>
    );
};

export default AppRouter;
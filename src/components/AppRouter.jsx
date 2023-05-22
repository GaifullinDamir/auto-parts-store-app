import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const {user} = useContext(Context);
    
    return (
        <Routes>
            {user.isAuth ? authRoutes.map(({path, Component}) =>{
                return(
                    <Route exact key={path} path={path} element={<Component/>} />
                )
            }) : null}
            {publicRoutes.map(({path, Component}) =>{
                return(
                    <Route exact key={path} path={path} element={<Component/>} />
                )
            })}
            <Route path="*" element={<Navigate to={SHOP_ROUTE}/>}/>
        </Routes>
    );
});

export default AppRouter;
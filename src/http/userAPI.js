import {$authHost, $host} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/auth/register', {email, password, role: 'buyer'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/auth/login', {email, password});
    // console.log(data);
    localStorage.setItem('token', data.token);    
    return jwt_decode(data.token);
}

export const check = async () => {
    const token = localStorage.getItem('token');
    return token;
}

export const checkAdminRole = () => {
    let role = '';
    const token = localStorage.getItem('token');
    if (token) {
        role = jwt_decode(token).role;
    }
    // console.log(role);
    return  role === 'admin';
}


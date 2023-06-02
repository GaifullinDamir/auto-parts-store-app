import {$authHost, $host} from './index';

export const createBasket = async (basket) => {
    const { data } = await $authHost.post('api/basket', basket);
    return data;
}

export const fetchBasket = async (userId) => {
    const { data } = await $authHost.get(`api/basket/${userId}`);
    return data;
}

export const createBasketPart = async (basketPart) => {
    const { data } = await $authHost.post('api/basket-part', basketPart);
    return data;
}

export const fetchOneBasketPart = async (id) => {
    const { data } = await $authHost.get(`api/one-basket-part/${id}`);
    return data;
}

export const fetchConcreteBasketParts = async (basketId) => {
    const { data } = await $authHost.get(`api/basket-part/${basketId}`);
    return data;
}

export const fetchBasketParts = async () => {
    const { data } = await $authHost.get(`api/basket-part`);
    return data;
}

export const updateBasketPart = async (id, basketPart) => {
    const { data } = await $authHost.patch(`api/basket-part/${id}`, basketPart)
    return data; 
}

export const deleteBasketPart = async (id) => {
    const { data } = await $authHost.delete(`/api/basket-part/${id}`);
    return data
}
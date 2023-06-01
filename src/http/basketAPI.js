import {$authHost, $host} from './index';

export const createBasket = async (basket) => {
    const { data } = await $authHost.post('api/basket', basket);
    return data;
}

export const fetchBasket = async (id) => {
    const { data } = await $host.get(`api/basket/${id}`);
    return data;
}

export const createBasketPart = async (basketPart) => {
    const { data } = await $authHost.post('api/basket-part', basketPart);
    return data;
}

export const fetchOneBasketPart = async (id) => {
    const { data } = await $host.get(`api/basket-part/${id}`);
    return data;
}

export const fetchBasketParts = async () => {
    const { data } = await $host.get(`api/basket-part`);
    return data;
}

export const updateBasketPart = async (id, basketPart) => {
    const { data } = await $host.patch(`api/basket-part/${id}`, basketPart)
    return data; 
}
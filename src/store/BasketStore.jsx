import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._basket = null;
        this._basketParts = [];
        makeAutoObservable(this);
    }

    setBasket(basket) {
        this._basket = basket;
    }

    get basket() {
        return this._basket;

    }

    setBasketParts(basketParts) {
        this._basketParts = basketParts;
    }

    get basketParts() {
        return this._basketParts;
    }
}
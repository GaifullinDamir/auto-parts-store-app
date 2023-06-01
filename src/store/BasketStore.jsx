import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._basketParts = [];
        makeAutoObservable(this);
    }

    setBasketParts(basketParts) {
        this._basketParts = basketParts;
    }

    get basketParts() {
        return this._basketParts;
    }
}
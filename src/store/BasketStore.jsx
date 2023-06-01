import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._id = '';
        this._basketParts = [];
        makeAutoObservable(this);
    }

    setId(id) {
        this._id = id;
    }

    get id() {
        return this._id;

    }

    setBasketParts(basketParts) {
        this._basketParts = basketParts;
    }

    get basketParts() {
        return this._basketParts;
    }
}
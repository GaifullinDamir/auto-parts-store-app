import {makeAutoObservable} from 'mobx';

export default class PartStore {
    constructor() {
        this._types = [
            {id: 1, name:'Диски'},
            {id:2, name:'Шины'}
        ]

        this._brands = [
            {id: 1, name:'Pirelli'},
            {id:2, name:'HRE'}
        ]
        
        this._parts = [
            {id: 1, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 2, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 3, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 4, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 5, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'}
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setParts(parts) {
        this._parts = parts;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get parts() {
        return this._parts;
    }
}
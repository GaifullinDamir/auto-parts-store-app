import {makeAutoObservable} from 'mobx';

export default class PartStore {
    constructor() {
        this._types = [
            {id: 1, name:'Диски'},
            {id:2, name:'Шины'},
            {id:3, name:'Тезнические жидкости'},
            {id:4, name:'Тормозная система'},
            {id:5, name:'Выхлопная система'},
            {id:6, name:'Топливная система'},
            {id:7, name:'Двигатель'}
        ]

        this._brands = [
            {id: 1, name:'Pirelli'},
            {id:2, name:'HRE'},
            {id:3, name:'ZIC'},
            {id:4, name:'Shell'},
            {id:5, name:'Brabus'},
            {id:6, name:'BMW M'},
            {id:7, name:'Alpina'},
            {id:8, name:'Kama'},
            {id:9, name:'Michelin'},
            {id:10, name:'Nokian'},
            {id:11, name:'Remus'},
        ]
        
        this._parts = [
            {id: 1, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 2, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 3, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 4, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 5, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 6, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 7, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 8, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 9, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'},
            {id: 10, name: 'Michelin Pilot Sport', price: 25000, rating: 5, img:'https://cdn.kolesa-darom.ru/upload/iblock/e0f/e0f1bfe6ade48ab0abb81adaff2e1088.jpg'}
        ]

        this._selectedType = {}
        this._selectedBrand = {}

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

    setSelectedType(selectedType) {
        this._selectedType = selectedType;
    }

    setSelectedBrand(selectedBrand) {
        this._selectedBrand = selectedBrand;
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

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}
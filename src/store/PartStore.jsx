import {makeAutoObservable} from 'mobx';

export default class PartStore {
    constructor() {
        this._types = []

        this._brands = []
        
        this._parts = []

        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        
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
        this.setPage(1);
        this._selectedType = selectedType;
    }

    setSelectedBrand(selectedBrand) {
        this.setPage(1);
        this._selectedBrand = selectedBrand;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount;
    }

    setLimit(limit) {
        this._limit = limit;
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

    get page() {
        return this._page;
    }
    
    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}
import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._isAdmin = false;
        makeAutoObservable(this);
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth;
    }

    setUser(user) {
        this._user = user;
    }

    setIsAdmin(isAdmin) {
        this._isAdmin = isAdmin;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get isAdmin() {
        return this._isAdmin;
    } 
}
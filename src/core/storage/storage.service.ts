import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable()
export class UserStorageService {

    constructor() {}

    save(value) {
        const storage = sessionStorage;
        storage.setItem(environment.AUTH_TOKEN, JSON.stringify(value));
    }

    get() {
        return JSON.parse(sessionStorage.getItem(environment.AUTH_TOKEN) || 'null');
    }

    remove() {
        sessionStorage.removeItem(environment.AUTH_TOKEN);
    }

}

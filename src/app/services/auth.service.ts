import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user$ = new ReplaySubject();
    user$ = this._user$.asObservable();

    constructor() {
        this._user$.next({name: 'KwintenP'});
    }
}

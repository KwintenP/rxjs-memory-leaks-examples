import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Pokemon {
    id: string;
    name: string;
    url: string;
}

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) {
    }

    getPokemon(): Observable<Pokemon[]> {
        return this.http.get('api/v2/pokemon')
            .pipe(
                map((res: { results: Pokemon[] }) => res.results),
                map(pokemon => pokemon.reduce((acc, curr, index) => [...acc, {
                    ...curr,
                    id: curr.url.substring(curr.url.length - 2, curr.url.length - 1)
                }], []))
            );
    }

    getPokemonById(id: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`api/v2/pokemon/${id}`);
    }
}

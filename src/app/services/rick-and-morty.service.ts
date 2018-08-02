import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RickAndMortyService {

    constructor(private httpClient: HttpClient) {
    }

    searchRickAndMorty(name: string) {
        return this.httpClient.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .pipe(
                map(response => response.results),
            );
    }
}

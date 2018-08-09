import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RickAndMortySearchResult } from '../models/rick-and-morty-search-result.entity';

@Injectable()
export class RickAndMortyService {

    constructor(private httpClient: HttpClient) {
    }

    searchRickAndMorty(name: string) {
        return this.httpClient.get<{results: Array<RickAndMortySearchResult>}>(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .pipe(
                map(response => response.results),
            );
    }
}

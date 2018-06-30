import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pokemon-overview',
    template: `
        <mat-list>
            <h3 mat-subheader>Pokemon</h3>
            <a mat-list-item [routerLink]="[pokemon.id]" *ngFor="let pokemon of pokemon$ | async"> {{ pokemon.name }} </a>
        </mat-list>
    `,
    styleUrls: ['./pokemon-overview.component.css']
})
export class PokemonOverviewComponent implements OnInit {
    pokemon$: Observable<Pokemon[]>;

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
        this.pokemon$ = this.pokemonService.getPokemon();
    }
}

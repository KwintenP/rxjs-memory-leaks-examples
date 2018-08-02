import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-services-and-subjects',
  template: `
        Memory leak much?
         {{pokemon | json}}
    `,
  styleUrls: ['./services-and-subjects.component.css']
})
export class ServicesAndSubjectsComponent implements OnInit {
  hugeArray = [];
  pokemon = [];
  constructor(private pokemonService: PokemonService) {
    for (let i = 0; i < 250000; i++) {
      this.hugeArray.push(Math.ceil(Math.random() * 100));
    }
  }

  ngOnInit() {
    this.pokemonService
      .getRealTimeFirstGenerationOfPokemon()
      .pipe(map(this.mapPokemonToName))
      .subscribe(pokemon => (this.pokemon = pokemon));
  }

  mapPokemonToName(pokemon: any) {
    return pokemon.map(poke => poke.name);
  }
}

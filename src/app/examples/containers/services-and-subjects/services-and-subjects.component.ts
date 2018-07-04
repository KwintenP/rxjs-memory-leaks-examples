import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
    selector: 'app-services-and-subjects',
    template: `
        Memory leak much?
    `,
    styleUrls: ['./services-and-subjects.component.css']
})
export class ServicesAndSubjectsComponent implements OnInit {
    hugeArray = [];
    constructor(private pokemonService: PokemonService) {
        for (let i = 0; i < 250000; i++) {
            this.hugeArray.push(Math.ceil(Math.random() * 100));
        }
    }

    ngOnInit() {
        this.pokemonService.getRealTimeFirstGenerationOfPokemon().subscribe(console.log.bind(this), console.log, () => console.log('complete'));
    }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './services/pokemon.service';
import { pokemonRoutes } from './pokemon.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PokemonOverviewComponent } from './components/pokemon-overview/pokemon-overview.component';
import { MatSharedModule } from '../mat-shared/mat-shared.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(pokemonRoutes),
        MatSharedModule,
    ],
    providers: [
        PokemonService
    ],
    declarations: [
        PokemonOverviewComponent,
        PokemonDetailComponent
    ]
})
export class PokemonModule {
}

import { Routes } from '@angular/router';
import { PokemonOverviewComponent } from './components/pokemon-overview/pokemon-overview.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const pokemonRoutes: Routes = [
  { path: '', component: PokemonOverviewComponent },
  { path: ':id', component: PokemonDetailComponent }
];

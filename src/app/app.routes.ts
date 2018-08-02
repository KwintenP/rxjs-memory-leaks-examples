import { Routes } from '@angular/router';
import { ObservableCreateComponent } from './examples/containers/observable-create/observable-create.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemon' },
  {
    path: 'examples',
    loadChildren: './examples/examples.module#ExamplesModule'
  },
  { path: 'pokemon', loadChildren: './pokemon/pokemon.module#PokemonModule' }
];

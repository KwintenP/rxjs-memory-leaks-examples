import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableCreateComponent } from './containers/observable-create/observable-create.component';
import { RouterModule } from '@angular/router';
import { exampleRoutes } from './example.routes';
import { CustomOperatorComponent } from './containers/custom-operator/custom-operator.component';
import { ServicesAndSubjectsComponent } from './containers/services-and-subjects/services-and-subjects.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreSubscribeComponent } from './containers/store-subscribe/store-subscribe.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/count.reducer';
import { UnboundShareReplayComponent } from './containers/unbound-share-replay/unbound-share-replay.component';
import { BitcoinService } from './services/bitcoin.service';
import { NoMemLeaksComponent } from './containers/no-mem-leaks/no-mem-leaks.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes),
        HttpClientModule,
        StoreModule.forRoot({ count: counterReducer })
    ],
    declarations: [ObservableCreateComponent, CustomOperatorComponent, ServicesAndSubjectsComponent, StoreSubscribeComponent, UnboundShareReplayComponent, NoMemLeaksComponent],
    providers: [PokemonService, BitcoinService]
})
export class ExamplesModule {
}

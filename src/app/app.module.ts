import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { MatSharedModule } from './mat-shared/mat-shared.module';
import { PokemonOverviewComponent } from './pokemon/components/pokemon-overview/pokemon-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HelpMeMrMeeseeksComponent } from './examples/containers/mr-meeseeks/help-me-mr-meeseeks.component';
import { MrMeeseeksComponent } from './examples/components/mr-meeseeks/mr-meeseeks.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HelpMeMrMeeseeksComponent, MrMeeseeksComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

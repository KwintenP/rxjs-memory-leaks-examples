import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSharedModule } from './mat-shared/mat-shared.module';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HelpMeMrMeeseeksComponent } from './containers/help-me-mr-meeseeks/help-me-mr-meeseeks.component';
import { MrMeeseeksComponent } from './components/mr-meeseeks/mr-meeseeks.component';
import { ExamplesOverviewComponent } from './containers/examples-overview/examples-overview.component';
import { HelpMeMultipleTimesMrMeeseeksComponent } from './containers/help-me-multiple-times-mr-meeseeks/help-me-multiple-times-mr-meeseeks.component';
import { FindingRxjsMemoryLeaksComponent } from './containers/finding-rxjs-memory-leaks/finding-rxjs-memory-leaks.component';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HelpMeMrMeeseeksComponent,
        MrMeeseeksComponent,
        ExamplesOverviewComponent,
        HelpMeMultipleTimesMrMeeseeksComponent,
        FindingRxjsMemoryLeaksComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatSharedModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        RickAndMortyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

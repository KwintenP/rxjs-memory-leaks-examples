import { Routes } from '@angular/router';
import { ExamplesOverviewComponent } from './containers/examples-overview/examples-overview.component';
import { HelpMeMrMeeseeksComponent } from './containers/help-me-mr-meeseeks/help-me-mr-meeseeks.component';
/*tslint:disable:max-line-length*/
import { HelpMeMultipleTimesMrMeeseeksComponent } from './containers/help-me-multiple-times-mr-meeseeks/help-me-multiple-times-mr-meeseeks.component';
import { FindingRxjsMemoryLeaksComponent } from './containers/finding-rxjs-memory-leaks/finding-rxjs-memory-leaks.component';
/*tslint:enable:max-line-length*/

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'overview'},
    {path: 'overview', component: ExamplesOverviewComponent},
    {path: 'help-me-mr-meeseeks', component: HelpMeMrMeeseeksComponent},
    {path: 'help-me-multiple-times-mr-meeseeks', component: HelpMeMultipleTimesMrMeeseeksComponent},
    {path: 'finding-rxjs-memory-leaks', component: FindingRxjsMemoryLeaksComponent},
];

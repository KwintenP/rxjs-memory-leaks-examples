import { Routes } from '@angular/router';
import { ObservableCreateComponent } from './containers/observable-create/observable-create.component';
import { CustomOperatorComponent } from './containers/custom-operator/custom-operator.component';
import { ServicesAndSubjectsComponent } from './containers/services-and-subjects/services-and-subjects.component';
import { StoreSubscribeComponent } from './containers/store-subscribe/store-subscribe.component';
import { UnboundShareReplayComponent } from './containers/unbound-share-replay/unbound-share-replay.component';
import { NoMemLeaksComponent } from './containers/no-mem-leaks/no-mem-leaks.component';
import { SubjectMemoryLeakOrNotComponent } from './containers/subject-memory-leak-or-not/subject-memory-leak-or-not.component';
import { FindRxBugsComponent } from './containers/find-rx-bugs/find-rx-bugs.component';

export const exampleRoutes: Routes = [
    {path: 'create', component: ObservableCreateComponent},
    {path: 'custom-operator', component: CustomOperatorComponent},
    {path: 'services-and-subjects', component: ServicesAndSubjectsComponent},
    {path: 'store-subscribe', component: StoreSubscribeComponent},
    {path: 'unbounded-share-replay', component: UnboundShareReplayComponent},
    {path: 'no-mem-leaks', component: NoMemLeaksComponent},
    {path: 'subject-mem-leak-or-not', component: SubjectMemoryLeakOrNotComponent},
    {path: 'find-rx-bugs', component: FindRxBugsComponent},
];

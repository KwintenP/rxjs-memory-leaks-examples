import { Routes } from '@angular/router';
import { ObservableCreateComponent } from './containers/observable-create/observable-create.component';
import { CustomOperatorComponent } from './containers/custom-operator/custom-operator.component';

export const exampleRoutes: Routes = [
    {path: 'create', component: ObservableCreateComponent},
    {path: 'custom-operator', component: CustomOperatorComponent},
];

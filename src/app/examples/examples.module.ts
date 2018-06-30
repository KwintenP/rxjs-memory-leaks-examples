import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableCreateComponent } from './containers/observable-create/observable-create.component';
import { RouterModule } from '@angular/router';
import { exampleRoutes } from './example.routes';
import { CustomOperatorComponent } from './containers/custom-operator/custom-operator.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes),
    ],
    declarations: [ObservableCreateComponent, CustomOperatorComponent]
})
export class ExamplesModule {
}

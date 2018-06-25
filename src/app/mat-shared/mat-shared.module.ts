import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

const angularMaterialModules = [
    MatToolbarModule
];

@NgModule({
    imports: [
        CommonModule,
        ...angularMaterialModules
    ],
    exports: [
        ...angularMaterialModules
    ],
    declarations: []
})
export class MatSharedModule {
}

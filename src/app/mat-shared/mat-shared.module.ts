import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

const angularMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
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

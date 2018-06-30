import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const angularMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
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

import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
} from '@angular/material';

const MODULES = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES,
})
export class AngularMaterialModule {
}

import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

const MODULES = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES,
})
export class AngularMaterialModule {
}

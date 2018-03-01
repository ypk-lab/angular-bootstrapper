// External imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Internal imports
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
    imports: [
        AngularMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
    ],
    exports: [
        AngularMaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class SharedModule {
}

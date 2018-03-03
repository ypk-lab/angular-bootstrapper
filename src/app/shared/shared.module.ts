// External imports
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Internal imports
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
    imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
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

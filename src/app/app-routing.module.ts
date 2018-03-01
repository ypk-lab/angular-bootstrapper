// External imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Internal imports
import { Error404Component } from './core/error-404.component';
import { SharedModule } from './shared/shared.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'hello-world',
        pathMatch: 'full'
    },
    {
        path: 'hello-world',
        component: HelloWorldComponent
    },
    {
        path: '**',
        component: Error404Component
    },
];

@NgModule({
    declarations: [
        Error404Component,
        HelloWorldComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        Error404Component,
        HelloWorldComponent,
        RouterModule
    ]
})

export class AppRoutingModule {
}

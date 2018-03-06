// External imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Internal imports
import { Error404Component } from './core/error-404.component';
import { SharedModule } from './shared/shared.module';
import { GithubUserComponent } from './github-user/github-user.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'github-user',
        pathMatch: 'full'
    },
    {
        path: 'github-user',
        component: GithubUserComponent
    },
    {
        path: '**',
        component: Error404Component
    },
];

@NgModule({
    declarations: [
        Error404Component,
        GithubUserComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        Error404Component,
        GithubUserComponent,
        RouterModule
    ]
})

export class AppRoutingModule {
}

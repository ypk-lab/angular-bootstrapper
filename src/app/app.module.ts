// External imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Internal imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule // Be careful, order maters for routing modules
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

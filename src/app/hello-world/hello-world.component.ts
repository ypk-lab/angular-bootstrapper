import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-hello-world',
    templateUrl: 'hello-world.component.html',
    styleUrls: ['hello-world.component.scss']
})
export class HelloWorldComponent {
    title = 'Angular Bootstrapper';
}

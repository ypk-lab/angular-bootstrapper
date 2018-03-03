// External imports
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-hello-world',
    templateUrl: 'hello-world.component.html',
    styleUrls: ['hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
    public title = 'Angular Bootstrapper';
    public user: any;
    public formGroup: FormGroup;
    public loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient
    ) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            search: ['octocat']
        });
        this.fetchUser();
    }

    public fetchUser() {
        this.loading = true;
        const userId = this.formGroup.controls['search'].value;
        this.httpClient.get(`https://api.github.com/users/${userId}`).toPromise().then(user => {
            this.user = user;
            this.loading = false;
        });
    }
}

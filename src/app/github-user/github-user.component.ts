// External imports
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-github-user',
    templateUrl: 'github-user.component.html',
    styleUrls: ['github-user.component.scss']
})
export class GithubUserComponent implements OnInit {
    public title = 'Angular Bootstrapper';
    public user: any;
    public formGroup: FormGroup;
    public loading = false;
    public found = false;

    public userNotFound = {
        avatar_url: './assets/img/user-not-found.svg',
        login: '?',
        name: 'User not found',
        html_url: ''
    };

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
        this.found = false;
        const userId = this.formGroup.controls['search'].value;
        this.httpClient.get(`https://api.github.com/users/${userId}`).toPromise().then(user => {
            this.user = user;
            this.found = !!user;
            this.loading = false;
        }).catch(() => {
            this.user = this.userNotFound;
            this.found = false;
            this.loading = false;
        });
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-load-indicator',
    templateUrl: './loadindicator.component.html',
    styleUrls: ['./loadindicator.component.css']
})
export class LoadIndicatorComponent {}

export class LoadingPage{
    public loading: boolean;

    constructor(val: boolean) { 
        this.loading=val;
    }

    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}
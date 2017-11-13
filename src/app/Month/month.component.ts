import { Component, OnInit, Input } from '@angular/core';

import { Month } from './month';

@Component({
    selector: 'month-component',
    templateUrl: 'month.component.html',
    styleUrls: [ 'month.component.css' ]
})
export class MonthComponent implements OnInit {

    @Input()
    monthNum: number;

    constructor() {
        
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}

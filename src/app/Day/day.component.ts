import { Component, OnInit, Input } from '@angular/core';

import { Day } from './day';
import { Event } from '../Event/event'

@Component({
    selector: 'day-component',
    templateUrl: 'day.component.html',
    styleUrls: [ 'day.component.css' ]
})
export class DayComponent implements OnInit {

    @Input()
    dayNum: number;

    Events: Array<Event>
    constructor() {
        this.Events = new Array<Event>();
        this.Events.push({
            id: 1,
            title: 'test-title 1',
            description: 'test-description 1'
        });
        this.Events.push({
            id: 2,
            title: 'test-title 2',
            description: 'test-description 2'
        });
        this.Events.push({
            id: 3,
            title: 'test-title 3',
            description: 'test-description 3'
        });
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}

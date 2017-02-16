import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import {Child} from '../shared/child';

@Component({
  moduleId: module.id,
  selector: 'app-example-2',
  templateUrl: 'example-2.component.html',
  styleUrls: ['example-2.component.css']
})
export class Example2Component implements OnInit {
    public options:number[] = [];
    public children:Child[] = [];

    constructor() {
        Rx.Observable.range(1,5).subscribe(num => {
            // Create children
            this.children.push({'num': num});
            // Create options
            this.options.push(num);
        });
    }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import {Child} from '../shared/child';

@Component({
  moduleId: module.id,
  selector: 'app-example-3',
  templateUrl: 'example-3.component.html',
  styleUrls: ['example-3.component.css']
})
export class Example3Component implements OnInit {
    public options:string[] = ["flex-start", "flex-end", "center", "baseline", "stretch"];
    public children:Child[] = [];

    constructor() {
        // Create an array of 1-5
        Rx.Observable.range(1,5).subscribe(num => {
            this.children.push({
                'num': num,
                'prop': "center"
            });
        });
    }

    ngOnInit() {
    }

}

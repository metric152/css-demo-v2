import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import {Child} from '../shared/child';


@Component({
  moduleId: module.id,
  selector: 'app-example-1',
  templateUrl: 'example-1.component.html',
  styleUrls: ['example-1.component.css']
})


export class Example1Component implements OnInit {
    public options:string[] = ["medium","large"];
    public children:Child[] = [];

    constructor() {
        // Create an array of 1-5
        Rx.Observable.range(1,5).subscribe(num => {
            this.children.push({
                'num': num,
                'prop': ""
            });
        });
    }

    ngOnInit() {
    }

}

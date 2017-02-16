import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import {GridChild} from '../shared/grid-child';

@Component({
  selector: 'app-example-9',
  templateUrl: 'example-9.component.html',
  styleUrls: ['example-9.component.css']
})

export class Example9Component implements OnInit {
    public elements:GridChild[] = [];
    public rows:string[] = [];
    public cols:string[] = [];

    constructor() {
        // Create strings for cols and rows
        Rx.Observable.range(1,6).subscribe(num => {
            this.rows.push(`row-${num}`);
            this.cols.push(`col-${num}`);
        });
    }

    ngOnInit() {
    }

    // Place the element on the grid
    public createElement(){
        var name = prompt("Enter a name for the element");
        if(!name) return;

        this.elements.push({
            'name': name,
            'rowStart': 'row-1',
            'rowEnd': 'row-2',
            'colStart': 'col-1',
            'colEnd': 'col-2'
        });
    }

    // Remove the element from the display
    public remove(index){
        this.elements.splice(index, 1);
    }
}

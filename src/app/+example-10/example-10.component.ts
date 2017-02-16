import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as Rx from 'rxjs/Rx';
import {GridChild} from '../shared/grid-child';

@Component({
  selector: 'app-example-10',
  templateUrl: 'example-10.component.html',
  styleUrls: ['../+example-9/example-9.component.css']
})
export class Example10Component implements OnInit {
    public elements:GridChild[] = [];
    public areas:string[] = ["header", "left-side", "main", "right-side", "footer"];

    constructor() {}

    ngOnInit() {
    }

    // Place the element on the grid
    public createElement(){
        var name = prompt("Enter a name for the element");
        this.elements.push({
            'name': name,
            'gridArea': 'main'
        });
    }

    // Remove the element from the display
    public remove(index){
        this.elements.splice(index, 1);
    }

}

import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-example-6',
  templateUrl: 'example-6.component.html',
  styleUrls: ['example-6.component.css']
})
export class Example6Component implements OnInit {
    public options:string[] = ["flex-start", "flex-end", "center", "space-between", "space-around"];
    public cssProp:string = "space-between";
    constructor() {}

    ngOnInit() {
    }

}

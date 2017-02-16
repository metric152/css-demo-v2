import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-example-8',
  templateUrl: 'example-8.component.html',
  styleUrls: ['example-8.component.css']
})
export class Example8Component implements OnInit {
    public options:string[] = ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"];
    public cssProp:string = "flex-end";
    constructor() {}

    ngOnInit() {
    }

}

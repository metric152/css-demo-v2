import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-example-7',
  templateUrl: 'example-7.component.html',
  styleUrls: ['example-7.component.css']
})
export class Example7Component implements OnInit {
    public options:string[] =["flex-start", "flex-end", "center", "baseline", "stretch"];
    public cssProp:string = "center";
    constructor() {}

    ngOnInit() {
    }

}

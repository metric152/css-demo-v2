import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-example-4',
  templateUrl: 'example-4.component.html',
  styleUrls: ['example-4.component.css']
})
export class Example4Component implements OnInit {
    public options:string[] = ["row", "row-reverse", "column", "column-reverse"];
    public cssProp:string = "row-reverse";

    constructor() {}

    ngOnInit() {
    }

}

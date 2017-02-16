import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-example-5',
  templateUrl: 'example-5.component.html',
  styleUrls: ['example-5.component.css']
})
export class Example5Component implements OnInit {
    public options:string[] = ["nowrap", "wrap", "wrap-reverse"];
    public cssProp:string = "wrap";

    constructor() {}

    ngOnInit() {
    }

}

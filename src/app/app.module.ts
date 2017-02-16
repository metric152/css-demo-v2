import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';
import { Example1Component } from './+example-1';
import { Example2Component } from './+example-2';
import { Example3Component } from './+example-3';
import { Example4Component } from './+example-4';
import { Example5Component } from './+example-5';
import { Example6Component } from './+example-6';
import { Example7Component } from './+example-7';
import { Example8Component } from './+example-8';
import { Example9Component } from './+example-9';
import { Example10Component } from './+example-10';


import { CssDemoAppComponent } from './css-demo.component';
import {CautionComponent} from './components/caution';

const appRoutes: Routes = [
{path: 'example-1', component: Example1Component},
{path: 'example-2', component: Example2Component},
{path: 'example-3', component: Example3Component},
{path: 'example-4', component: Example4Component},
{path: 'example-5', component: Example5Component},
{path: 'example-6', component: Example6Component},
{path: 'example-7', component: Example7Component},
{path: 'example-8', component: Example8Component},
{path: 'example-9', component: Example9Component},
{path: 'example-10', component: Example10Component}
];

@NgModule({
  declarations: [
    CssDemoAppComponent,
    CautionComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    Example8Component,
    Example9Component,
    Example10Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [CssDemoAppComponent]
})
export class AppModule {  }

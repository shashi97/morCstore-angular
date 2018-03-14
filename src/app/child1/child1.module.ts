import { NgModule } from '@angular/core';
import { Child1Component } from './child1.component';
import { CommonModule } from '@angular/common';
import {SharedComponentModule} from '../shared.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    // FormsModule
    SharedComponentModule
  ],
  declarations: [
    Child1Component,
  ],
  providers: [

  ]
})

export class Child_1Module { }

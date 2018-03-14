import { NgModule } from '@angular/core';
import { parentRouting } from './parent.routing';
import { ParentComponent } from './parent.component';
import { CommonModule } from '@angular/common';
import {ParentEditComponent} from './parent-edit/parent-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    parentRouting,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ParentComponent,
    ParentEditComponent
  ],
  providers: [
  ]
})

export class ParentModule { }

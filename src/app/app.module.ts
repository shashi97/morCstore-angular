import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './shared.module';
import { NodeService } from './shared/node.service';

import { AppComponent } from './app.component';
import { ParentModule } from './parent/parent.module';
import { HomeComponent } from './home/home.component';
import { Child_1Module } from './child1/child1.module';
import { DialogModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MenuItem } from 'primeng/components/common/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule } from '@nebular/theme';
import { CalendarModule } from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {DataSharedService} from './data.service';
import {BreadcrumbComponent} from './core/bread-crumb/bread-crumb.compoennt';
import { AppServicesModule } from './appServices/app-services.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadcrumbComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    DataTableModule,
    SharedModule,
    NgbModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    ParentModule,
    SharedComponentModule,
    ButtonModule,
    routing,
    DialogModule,
    CommonModule,
    CalendarModule,
    Child_1Module,
    SplitButtonModule,
    AppServicesModule

    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [Http,
    NodeService,
    DataSharedService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class AppModule { }

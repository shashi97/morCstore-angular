import { NgModule } from '@angular/core';
import { appServicesRouting } from './app-services.routing';
import { AppServicesComponent } from './app-services.component';
import { AppServiceBackupComponent } from './backup/backup.component';
import { AppServiceEditComponent } from './app-services-edit/app-service-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    appServicesRouting,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppServicesComponent,
    AppServiceEditComponent,
    AppServiceBackupComponent
  ],
  providers: [
  ]
})

export class AppServicesModule { }

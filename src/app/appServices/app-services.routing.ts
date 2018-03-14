import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppServicesComponent } from '../appServices/app-services.component';
import { AppServiceBackupComponent } from './backup/backup.component';
import { AppServiceEditComponent } from './app-services-edit/app-service-edit.component';
import { HomeComponent } from '../home/home.component';



export const appServicesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'appservices',
        component: AppServicesComponent,
        data: {
          breadcrumb: 'AppServices'
        },
        children: [
          {
            path: ':user/edit',
            component: AppServiceEditComponent,
            data: {
              breadcrumb: ':user name dynamic'
            }, 
            children: [
              {
                path: 'backup',
                component: AppServiceBackupComponent,
                data: {
                  breadcrumb: ':user - backup'
                }            
              },
              
            ]       
          },
          
        ]
      },
    ]
  }
];
export const appServicesRouting: ModuleWithProviders = RouterModule.forChild(appServicesRoutes);
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../parent/parent.component';
import { HomeComponent } from '../home/home.component';
import { Child1Component } from '../child1/child1.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';

export const parentRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'parent',
        component: ParentComponent,
        data: {
          breadcrumb: 'Dashboard'
        },
        children: [
          {
            path: 'edit/Parent',
            component: ParentEditComponent,
            data: {
              breadcrumb: 'parent-edit'
            },
            children: [
              {
                path: 'child_1',
                component: Child1Component,
                data: {
                  breadcrumb: 'Backups'
                }
              }
            ]
          },
        ]
      },
    ]
  }
];
export const parentRouting: ModuleWithProviders = RouterModule.forChild(parentRoutes);
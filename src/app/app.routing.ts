import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';



const appRoutes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [

    ]
  },


  // otherwise redirect to product
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

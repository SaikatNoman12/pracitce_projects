import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule)
      },
      {
        path: '',
        loadChildren: () => import('./about/about.module')
          .then(m => m.AboutModule)
      },
      {
        path: '',
        loadChildren: () => import('./contact/contact.module')
          .then(m => m.ContactModule)
      },
      {
        path: '',
        loadChildren: () => import('./blog/blog.module')
          .then(m => m.BlogModule)
      },
      {
        path: '',
        loadChildren: () => import('./protfolio/protfolio.module')
          .then(m => m.ProtfolioModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

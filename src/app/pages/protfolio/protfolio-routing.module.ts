import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtfolioComponent } from './protfolio.component';

const routes: Routes = [
  {
    path: 'protfolio',
    component:ProtfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtfolioRoutingModule { }

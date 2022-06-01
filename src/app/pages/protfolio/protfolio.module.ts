import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtfolioRoutingModule } from './protfolio-routing.module';
import { ProtfolioComponent } from './protfolio.component';


@NgModule({
  declarations: [
    ProtfolioComponent
  ],
  imports: [
    CommonModule,
    ProtfolioRoutingModule
  ]
})
export class ProtfolioModule { }

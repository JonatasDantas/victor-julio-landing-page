import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NbCardModule, NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    IvyCarouselModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class PortfolioModule { }

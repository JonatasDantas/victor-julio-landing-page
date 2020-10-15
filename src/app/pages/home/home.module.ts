import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbButtonModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    NbButtonModule,
    NbCardModule,
  ]
})
export class HomeModule { }

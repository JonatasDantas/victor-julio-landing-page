import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { NbAlertModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    NbAlertModule,
    NbIconModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }

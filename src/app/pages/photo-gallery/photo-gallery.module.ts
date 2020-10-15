import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [
    CommonModule,
    CrystalLightboxModule,
    NbIconModule
  ]
})
export class PhotoGalleryModule { }

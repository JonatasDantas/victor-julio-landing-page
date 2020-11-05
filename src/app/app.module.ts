import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbButtonModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SidebarModule } from 'ng-sidebar';
import { HomeModule } from './pages/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AboutMeModule } from './pages/about-me/about-me.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { PhotoGalleryModule } from './pages/photo-gallery/photo-gallery.module';
import { ContactModule } from './pages/contact/contact.module';
import { HireMeModule } from './pages/hire-me/hire-me.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    SidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NgbModule,
    NbButtonModule,
    DeviceDetectorModule,
    HomeModule,
    AboutMeModule,
    PortfolioModule,
    PhotoGalleryModule,
    ContactModule,
    HireMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

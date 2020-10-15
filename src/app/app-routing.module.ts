import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'sobre-mim',
    component: AboutMeComponent,
    data: {animation: 'About-Me'}
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {animation: 'Portfolio'}
  },
  {
    path: 'portfolio/detalhes/:encoded_name',
    component: PhotoGalleryComponent,
    data: {animation: 'Portfolio'}
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

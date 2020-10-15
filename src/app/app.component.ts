import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') sidebarContainer: ElementRef;

  title = 'victor-julio-landing-page';
  isMobile = true;
  sidebarOpened = false;

  links = [
    {
      title: 'Home',
      link: 'home',
      icon: {icon: 'home', pack: 'fa'}
    },
    {
      title: 'Sobre mim',
      link: 'sobre-mim',
      icon: {icon: 'user-tie', pack: 'fa'}
    },
    {
      title: 'Portfolio',
      link: 'portfolio',
      icon: {icon: 'images', pack: 'fa'}
    },
    {
      title: 'Dúvidas',
      link: 'duvidas',
      icon: {icon: 'camera-retro', pack: 'fa'}
    },
    {
      title: 'Contato',
      link: 'contato',
      icon: {icon: 'comments', pack: 'fa'}
    },
  ];

  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService,
    private iconLibraries: NbIconLibraries,
    private metaTagService: Meta
  ) {
    this.iconLibraries.registerFontPack('fa', { iconClassPrefix: 'fa', packClass: 'fa' });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
  }

  ngAfterViewInit() {
    this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
  }

  navigatePage(link) {
    this.router.navigate([link.link]);
    this.sidebarContainer.nativeElement.parentElement.scrollTop = 0;
  }

  navigateHome() {
    this.router.navigate(['home']);
    this.sidebarContainer.nativeElement.parentElement.scrollTop = 0;
  }

  navigateContact() {
    this.router.navigate(['contato']);
    this.sidebarContainer.nativeElement.parentElement.scrollTop = 0;
  }
}

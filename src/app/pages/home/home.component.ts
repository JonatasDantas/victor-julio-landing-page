import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServicesData } from 'src/app/@core/data/services-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('container') sidebarContainer: ElementRef;

  services = ServicesData;

  hoveredElement: any;

  constructor(
    private router: Router,
    private metaTagService: Meta) { }

  ngOnInit(): void {
    this.metaTagService.updateTag(
      { name: 'description', content: 'Procurando por um fotógrafo carismático, divertido, apaixonado e criativo ? Sou eu mesmo!' }
    );
  }

  navigatePortfolio() {
    this.router.navigate(['portfolio']);
  }

  navigateServiceDetails(service: any) {
    const sidebarElement = document.getElementsByClassName('ng-sidebar__content')[0];

    this.router.navigate(['portfolio/detalhes/', service.encoded_name]);
    sidebarElement.scrollTop = 0;
  }
}

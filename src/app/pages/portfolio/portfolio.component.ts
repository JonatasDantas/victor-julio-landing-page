import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ServicesData } from 'src/app/@core/data/services-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  isMobile = false;
  hoveredElement: any;
  services = ServicesData;

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
  }

  navigateServiceDetails(service: any) {
    this.router.navigate(['portfolio/detalhes/', service.encoded_name]);
  }
}

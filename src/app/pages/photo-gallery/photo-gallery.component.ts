import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesData } from 'src/app/@core/data/services-data';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  public service: any;
  hoveredElement: any;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.service = ServicesData.find((item) => item.encoded_name === params.encoded_name);
    });
  }

  goBack(): void {
    this.location.back();
  }

  selectImage(index: number) {
    const element: any = document.getElementsByClassName(`image-${index}`)[0];

    element.click();
  }
}

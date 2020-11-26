import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent implements OnInit {
  cameraOnOffBehavior: BehaviorSubject<boolean>;
  foundImages: string[];

  constructor(
    private searchService: SearchService
  ) { 
    this.cameraOnOffBehavior = new BehaviorSubject(false);
    this.foundImages  = [];
  }

  ngOnInit(): void {}

  handleOnOffCamera(on: boolean) {
    this.cameraOnOffBehavior.next(on);
  }

  // ion-datetime component return {} object if untouched component
  makeSearch(min: any, max: any) {
    this.foundImages = this.searchService.getPerDate({
      min: min.year ? new Date(min.year, min.month, min.day) : null,
      max: max.year ? new Date(max.year, max.month, max.day) : null
    });
  }
}

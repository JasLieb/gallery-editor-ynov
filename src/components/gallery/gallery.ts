import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchService } from '../../services/search/search.service';
import { imagesPaths } from "../../assets/imgs/imageDictionary";
import { SearchOptions } from '../../core/model/filters/searchFilter.model';
import { Localization } from '../../core/model/filters/localization.model';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent implements OnInit {
  cameraOnOffBehavior: BehaviorSubject<boolean>;
  filters$: Observable<any[]>;
  images: string[];

  constructor(
    private searchService: SearchService
  ) { 
    this.cameraOnOffBehavior = new BehaviorSubject(false);
    this.images  = [...imagesPaths];
    this.searchService.loadMetadata(this.images);
    this.filters$ = this.searchService.availableFiltersBehavior.asObservable();
  }

  ngOnInit(): void {}

  handleOnOffCamera(on: boolean) {
    this.cameraOnOffBehavior.next(on);
  }

  makeSearch(min: any, max: any, localization: Localization) {
    // ion-datetime component return {} object if untouched component
    const dateInterval = {
      min: min.year ? new Date(min.year, min.month, min.day) : null,
      max: max.year ? new Date(max.year, max.month, max.day) : null
    };
    this.images = this.searchService.filter(
      new SearchOptions(
        localization,
        dateInterval
      )
    );
  }
}

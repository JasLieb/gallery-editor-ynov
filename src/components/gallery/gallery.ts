import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchService } from '../../services/search/search.service';
import { imagesPaths } from "../../assets/imgs/imageDictionary";
import { DateInterval, SearchOptions } from '../../core/model/filters/searchOptions.model';
import { Localization } from '../../core/model/filters/localization.model';
import { SearchFilters } from '../../core/model/filters/searchFilters.model';

interface IonicDatetimeValue {
  year: number;
  month: number;
  day: number;
}

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent implements OnInit {
  cameraOnOffBehavior: BehaviorSubject<boolean>;
  filters$: Observable<SearchFilters>;
  images: string[];

  defaultLocalization = Localization.default;
  selectedLocalization: Localization = this.defaultLocalization;
  
  minDate: IonicDatetimeValue;
  maxDate: IonicDatetimeValue;
  
  get dateInterval(): DateInterval {
    return {
      min: this.minDate ? new Date(this.minDate.year, this.minDate.month, this.minDate.day) : null,
      max: this.maxDate ? new Date(this.maxDate.year, this.maxDate.month, this.maxDate.day) : null
    };
  }

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

  // ion-datetime component return {} for IonicDatetimeValue object if untouched component
  makeSearch() {
    console.log(this.selectedLocalization);
    
    this.images = this.searchService.filter({
        localization: this.selectedLocalization,
        dateInterval: this.dateInterval
    });
  }
}

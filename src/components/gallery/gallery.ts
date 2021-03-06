import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchService } from '../../services/search/search.service';
import { imagesPaths } from "../../assets/imgs/imageDictionary";
import { DateInterval, SearchOptions } from '../../core/model/filters/searchOptions.model';
import { Localization } from '../../core/model/filters/localization.model';
import { SearchFilters } from '../../core/model/filters/searchFilters.model';
import { Device } from '../../core/model/filters/device.model';

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

  isSearchOpen = false;
  defaultLocalization = Localization.default;
  selectedLocalization: Localization = this.defaultLocalization;
  defaultDevice = Device.default;
  selectedDevice: Device = this.defaultDevice;

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

  openSearch() {
    this.isSearchOpen = true;
  }

  makeSearch(minDate: IonicDatetimeValue, maxDate: IonicDatetimeValue) {
    const dateInterval = {
      min: minDate.year ? new Date(minDate.year, minDate.month, minDate.day) : null,
      max: maxDate.year ? new Date(maxDate.year, maxDate.month, maxDate.day) : null
    };
    
    this.images = this.searchService.filter({
        localization: this.selectedLocalization,
        device: this.selectedDevice,
        dateInterval
    });
    this.isSearchOpen = false;
  }
}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SearchService } from "../../services/search/search.service";
import { imagesPaths } from "../../assets/imgs/imageDictionary";

import { Localization } from "../../core/model/filters/localization.model";
import { SearchFilters } from "../../core/model/filters/searchFilters.model";
import { Device } from "../../core/model/filters/device.model";

interface IonicDatetimeValue {
  year: number;
  month: number;
  day: number;
}

@Component({
  selector: "gallery",
  templateUrl: "gallery.html",
})
export class GalleryComponent implements OnInit {
  @ViewChild("canvasEl") canvas: ElementRef;
  cameraOnOffBehavior: BehaviorSubject<boolean>;
  selectedImagesBehavior: BehaviorSubject<string[]>;
  filters$: Observable<SearchFilters>;
  images: string[];

  isSearchOpen = false;
  defaultLocalization = Localization.default;
  selectedLocalization: Localization = this.defaultLocalization;
  defaultDevice = Device.default;
  selectedDevice: Device = this.defaultDevice;

  constructor(private searchService: SearchService) {
    this.cameraOnOffBehavior = new BehaviorSubject(false);
    this.selectedImagesBehavior = new BehaviorSubject([]);
    this.images = [...imagesPaths];
    this.searchService.loadMetadata(this.images);
    this.filters$ = this.searchService.availableFiltersBehavior.asObservable();
  }

  ngOnInit(): void {
    if (this.canvas) {
      this.addImageToPatchwork(this.images[0], 0, 0, 200, 200);
      this.addImageToPatchwork(this.images[4], 200, 0, 100, 100);
      this.addImageToPatchwork(this.images[1], 200, 100, 100, 100);
    }
  }

  handleOnOffCamera(on: boolean) {
    this.cameraOnOffBehavior.next(on);
  }

  openSearch() {
    this.isSearchOpen = true;
  }

  selectImage(image: string) {
    const currentSelected = this.selectedImagesBehavior.value;
    let selectedImages = [];

    if(currentSelected.includes(image)) {
      selectedImages = currentSelected.filter(i => i !== image)
    } else {
      selectedImages = [
        ...currentSelected,
        image
      ].filter(
        (value, index, self) => self.indexOf(value) === index
      );
    }
      
    this.selectedImagesBehavior.next(selectedImages);
  }

  isSelectedImage(image: string) : boolean {
    return this.selectedImagesBehavior.value.includes(image);
  }

  makeSearch(minDate: IonicDatetimeValue, maxDate: IonicDatetimeValue) {
    const dateInterval = {
      min: minDate.year
        ? new Date(minDate.year, minDate.month, minDate.day)
        : null,
      max: maxDate.year
        ? new Date(maxDate.year, maxDate.month, maxDate.day)
        : null,
    };

    this.images = this.searchService.filter({
      localization: this.selectedLocalization,
      device: this.selectedDevice,
      dateInterval,
    });
    this.isSearchOpen = false;
  }

  private addImageToPatchwork(imageSource, x, y, width, height) {
    const context = (this.canvas.nativeElement as HTMLCanvasElement).getContext("2d");

    var img = new Image(); 
    img.src = imageSource;

    img.onload = () => {

      context.drawImage(
        img,
        // 0,0, // Start at (x, y) of the image (crop)
        // width, height, // "Get" a w * h area from the source image (crop)
        x, y,  // Place the result at (x, y) in the canvas,
        width, height  // With as width * height
      );

      console.log(context);
    }; 
  }
}

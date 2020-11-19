import { Injectable } from "@angular/core";
import { from } from "rxjs/observable/from";
import exifr from "exifr";
import { BehaviorSubject, Observable } from "rxjs";
import { Localization } from "../../core/model/filters/localization.model";
import { SearchOptions } from "../../core/model/filters/searchFilter.model";
import { UtilsHttpService } from "../http/utils.http.service";

interface AnalyzedImage {
  path: string;
  metadata: any;
}

@Injectable()
export class SearchService {
  availableFiltersBehavior: BehaviorSubject<any[]>;
  private analyzedImages: AnalyzedImage[];

  constructor(
    private utilsHttpService: UtilsHttpService
  ) {
    this.analyzedImages = [];
    this.availableFiltersBehavior = new BehaviorSubject([]);
  }

  loadMetadata(paths: string[]) {
    paths.forEach(path => {
      this.getExif(path).subscribe((meta) => {
        console.log(meta);
        this.analyzeImage(path, meta);
      });
    });
  }
  }
  
  private analyzeImage(path: string, meta: any) {
    const image = {
      path,
      metadata: {
        ...meta,
        localization: Localization.default,
        createDate: new Date(meta.CreateDate)
      },
    } as AnalyzedImage;

    this.analyzedImages.push(image);

    if(meta.latitude && meta.longitude) {
      this.updateImageLocation(
        image.path,
        {
          lat: meta.latitude,
          lon: meta.longitude
        }
      );
    }
  }

  private updateImageLocation(imagePath: string, location: any) {
    this.utilsHttpService.getAddressLocation({
      lat: location.lat,
      lon: location.lon,
    })
    .subscribe(
      (res: any) => {
        const localization = Localization.make(res.address);

        this.analyzedImages = 
          this.analyzedImages.map(
            image => {
              if(image.path === imagePath) {
                image.metadata.localization = localization;
              }

              return image;
            }
          );
        this.addFilter(localization);
    });
  }

  private addFilter(localization: Localization) {
    this.availableFiltersBehavior.next(
      [
        ...this.availableFiltersBehavior.value,
        localization
      ]
      .filter(
        (filter, i, arr) => 
          arr.findIndex(
            f => filter.equals(f)
          ) === i
      )
    )
  }

  private filterLocalization(image: AnalyzedImage, filter: Localization): boolean {
    return filter && image.metadata.localization.municipality === filter.municipality;
  }

  private checkCreateDate(createDate: Date, interval: any): boolean {
    let min = true;
    let max = true;

    if(interval.min) {
      min = createDate >= interval.min
    }

    if(interval.max) {
      max = createDate <= interval.max
    }
    
    return min && max;
  } 

  private getExif(path: string): Observable<any> {
    return from(exifr.parse(path));
  }
}

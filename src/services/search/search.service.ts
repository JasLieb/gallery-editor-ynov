import { Injectable } from "@angular/core";
import { from } from "rxjs/observable/from";
import exifr from "exifr";
import { imagesPaths } from "../../assets/imgs/imageDictionary";
import { Observable } from "rxjs";

interface SearchResult {
  path: string;
  meta: any;
}

@Injectable()
export class SearchService {
  private metadatas: SearchResult[];

  constructor() {
    this.metadatas = [];
    this.loadMetadata(imagesPaths);
  }

  loadMetadata(paths: string[]) {
    paths.forEach(path => {
      console.log(path);
      this.getExif(path).subscribe((meta) => {
        console.log(meta);
        this.metadatas.push({
          path,
          meta: {
            ...meta,
            createDate: new Date(meta.CreateDate)
          },
        } as SearchResult);
      });
    });
  }

  getPerDate(interval: any): string[] {
    return this.metadatas.filter(
      (results) => this.checkCreateDate(
        new Date(results.meta.createDate), 
        interval
      )
    )
    .sort(
      (a,b) => a.meta.createDate - b.meta.createDate
    )
    .map(
      (results) => results.path
    );
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

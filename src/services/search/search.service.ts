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
          meta,
        } as SearchResult);
      });
    });
  }

  search(searchOptions: any): string[] {
    console.log(searchOptions);

    if (searchOptions.date) {
      return this.getPerDate(searchOptions.date).map((res) => res.path);
    }
  }

  getPerDate(date: any): SearchResult[] {
    console.log(this.metadatas);
    return this.metadatas.filter(
      (metadata) => new Date(metadata.meta.CreateDate) >= date.min
    );
  }

  private getExif(path: string): Observable<any> {
    return from(exifr.parse(path));
  }
}

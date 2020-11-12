import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent {

  cameraOnOffBehavior: BehaviorSubject<boolean>;

  constructor() { 
    this.cameraOnOffBehavior = new BehaviorSubject(false);
  }

  handleOnOffCamera(on: boolean) {
    this.cameraOnOffBehavior.next(on);
  }

}

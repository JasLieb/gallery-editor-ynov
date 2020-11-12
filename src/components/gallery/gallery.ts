import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
selector: 'gallery',
templateUrl: 'gallery.html'
})
export class GalleryComponent {

cameraOnOffBehavior: BehaviorSubject<boolean>;
image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';

constructor(private camera: Camera) {
    this.cameraOnOffBehavior = new BehaviorSubject(false);
  }

  showGallery(){
    const libraryImage = this.openLibrary();
    this.image = 'data:image/jpg;base64,' + libraryImage;
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  handleOnOffCamera(on: boolean) {
    this.cameraOnOffBehavior.next(on);
  }

}

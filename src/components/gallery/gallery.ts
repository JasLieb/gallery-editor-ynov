import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoProvider } from '../../providers/photo/photo';


@Component({
selector: 'gallery',
templateUrl: 'gallery.html'
})
export class GalleryComponent {

cameraOnOffBehavior: BehaviorSubject<boolean>;
image = 'https://images-na.ssl-images-amazon.com/images/I/71qd5rXjb-L._AC_SL1185_.jpg';

constructor(private camera:Camera, public photoService: PhotoProvider) {
    this.cameraOnOffBehavior = new BehaviorSubject(false);
  }

  ngOnInit() {
  /*
    this.photoService.loadSaved();
    console.log("Photos");
    console.log(this.photoService.photos);
    */
  }
  //Bouton ouvrant la galerie et modifiant l'image affichée par celle sélectionnée
  async addPhoto() {
    const libraryImage = await this.openLibrary();
    console.log("Librairie : " + libraryImage);
    this.image = 'data:image/jpg;base64,' + libraryImage;
  }

  /*
    showGallery(){
      const libraryImage = this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
  */
  //Fonction pour ouvrir la galerie
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

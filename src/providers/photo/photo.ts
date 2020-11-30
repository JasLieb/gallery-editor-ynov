import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

class Photo {
  data: any;
}

/*
  Generated class for the PhotoProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotoProvider {
  public photos: Photo[] = [];

  constructor(private storage: Storage) {
  }

  loadSaved() {
    let i = 0;
    this.storage.length().then(result => console.log("Taille tableau stockage : " + result));
    this.storage.get('photos').then(
      (photos) => {
        this.photos = photos || [];
        i++;
        console.log("i = " + i);
        if (i == 5)
          return 0;
      }
    ).then(r  => console.log("Data loaded !"));
  }
}

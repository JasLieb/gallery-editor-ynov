import { Injectable } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { Storage } from '@ionic/storage';

@Injectable()

export class PhotoService {

    public photos: Photo[] = [];

    constructor(private camera: CameraPreview, private storage: Storage) { }

    takePicture() {
        const options: CameraPreviewOptions = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: true,
            alpha: 1
        }

        this.camera.startCamera(options).then((imageData) => {
            // Add new photo to gallery
            this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });

            // Save all photos for later viewing
            this.storage.set('photos', this.photos);
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });

    }

    loadSaved() {
        this.storage.get('photos').then((photos) => {
            this.photos = photos || [];
        }), (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        };
    }

}



class Photo {
         data: any;
}
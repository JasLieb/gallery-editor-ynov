import { Injectable } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { Storage } from '@ionic/storage';

const optionsPreview: CameraPreviewOptions = {
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


@Injectable()
export class PhotoService {

    public photos: Photo[] = [];

    constructor(private cameraPreview: CameraPreview, private storage: Storage) { }


    takePicture()  {
        this.cameraPreview.takePicture(optionsPreview).then((imageData) => {
            // Add new photo to gallery
            this.photos.unshift({
                data: 'data:image/png;base64,' + imageData
            });
            console.log(imageData);

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

    start() {
        this.cameraPreview.startCamera(optionsPreview)
            .then(
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    stop() {
        this.cameraPreview.stopCamera().then(
                (res) => {
                    console.log(res);
                },
                (err) => {
                    console.log(err);
                }
            );
    }
}



class Photo {
         data: any;
}
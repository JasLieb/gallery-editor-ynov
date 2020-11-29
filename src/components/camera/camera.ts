import { Component, Input } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: window.screen.height * 0.25,
  width: window.screen.width,
  height: window.screen.height * 0.75,
  camera: "rear",
  tapPhoto: true,
  previewDrag: false,
  toBack: false,
  alpha: 1,
};

@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraComponent {

  public photos: Photo[] = [];

  @Input() onOff$: Observable<any>;

  text: string;

  constructor(
    private cameraPreview: CameraPreview,
    private storage: Storage,
  ) { }

  ngOnInit(): void {
  }

  takePicture() {
    this.cameraPreview.takePicture(cameraPreviewOpts).then((imageData) => {
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
    this.cameraPreview.startCamera(cameraPreviewOpts)
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
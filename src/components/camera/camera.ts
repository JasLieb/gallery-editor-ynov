import { Component, Input } from '@angular/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@ionic-native/camera-preview';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../core/model/photo.model';
import { DomSanitizer } from '@angular/platform-browser';

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

const pictureOpts: CameraPreviewPictureOptions = {
  width: 0,
  height: 0,
  quality: 85
}

@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraComponent {

  @Input() onOff$: Observable<any>;
  // photo$: Subject<Photo>;

  text: string;

  constructor(
    private photoService: PhotoService,
    private cameraPreview: CameraPreview,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  takePicture() {
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.photoService.savePhoto(
        new Photo(
          this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${imageData}`)
        )
      );
      // Save all photos for later viewing
    }, (err) => {
      // Handle error
      console.log("Camera issue: " + err);
    });
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
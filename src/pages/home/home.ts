import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: any;
  picture: string;

  constructor(
    public navCtrl: NavController,
    cameraPreview: CameraPreview,
  ) {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: "rear",
      tapPhoto: true,
      previewDrag: true,
      toBack: false,
      alpha: 1,
    };

    cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        this.text = res;
        console.log(res);
      },
      (err) => {
        this.text = err;
        console.log(err);
      }
    );
  }

}

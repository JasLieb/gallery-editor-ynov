import { Component, Input } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { Observable } from 'rxjs/Observable';

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

  @Input() onOff$: Observable<any>;

  text: string;

  constructor(
    private cameraPreview: CameraPreview,
  ) {
    this.start();
  }

  ngOnInit(): void {
    this.onOff$.subscribe(
      on => 
        on 
          ? this.start()
          : this.cameraPreview.stopCamera().then()
    );
  }

  private start() {
    this.cameraPreview.startCamera(cameraPreviewOpts)
      .then(
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
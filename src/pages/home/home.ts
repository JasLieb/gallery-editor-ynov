import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraComponent } from '../../components/camera/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isCameraStarted: boolean;
  currentImage: any;

  constructor(
    public navCtrl: NavController,
    public cameraComponent: CameraComponent
  ) { }
  
  ngOnInit() {
    this.isCameraStarted = false;
    this.cameraComponent.loadSaved();
  }

  toggleCamera() {
    this.isCameraStarted = !this.isCameraStarted;
    if(this.isCameraStarted) {
      this.cameraComponent.start();
    } else {
      this.cameraComponent.stop();
    }
  }

  takePicture() {
    this.cameraComponent.takePicture();
  }
}

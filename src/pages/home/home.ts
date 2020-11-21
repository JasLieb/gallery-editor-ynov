import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isCameraStarted: boolean;
  currentImage: any;

  constructor(
    public navCtrl: NavController,
    public photoService: PhotoService
  ) { }
  
  ngOnInit() {
    this.isCameraStarted = false;
    this.toggleCamera();
    this.photoService.loadSaved();
  }

  toggleCamera() {
    this.isCameraStarted = !this.isCameraStarted;
    if(this.isCameraStarted) {
      this.photoService.start();
    } else {
      this.photoService.stop();
    }
  }

  takePicture() {
    this.photoService.takePicture();
  }
}
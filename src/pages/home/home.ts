import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public photoService: PhotoService
  ) { }
  
  ngOnInit() {
    this.photoService.loadSaved();
  }
}

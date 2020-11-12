import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoEditorPage } from '../photo-editor/photo-editor'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) { }
  
navigateToPhotoEditor(){
  this.navCtrl.push(PhotoEditorPage);
}

}

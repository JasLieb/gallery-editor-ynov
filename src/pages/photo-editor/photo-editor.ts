import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhotoEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-editor',
  templateUrl: 'photo-editor.html',
})
export class PhotoEditorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // grayFilter = false;
  // blurFilter = false;
  // contrastFilter = false;

  class = "";

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoEditorPage');
  }

  // toggleGray()
  // {
  //   this.grayFilter = !this.grayFilter;
  // }

  // toggleBlur()
  // {
  //   this.blurFilter = !this.blurFilter;
  // }

  // toggleContrats()
  // {
  //   this.contrastFilter = !this.contrastFilter;
  // }

  toggleNone() {
    this.class = "";
  }

  toggleGray() {
    this.class = "gray";
  }

  toggleBlur() {
    this.class = "blur";
  }

  toggleContrast() {
    this.class = "contrast";
  }

  toggleBright() {
    this.class = "bright";
  }

  toggleInvert() {
    this.class = "invert";
  }

  toggleSepia() {
    this.class = "sepia";
  }
}

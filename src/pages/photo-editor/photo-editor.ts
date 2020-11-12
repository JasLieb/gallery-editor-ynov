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

  defaultFilters = {
    grayscale: "0%",
    blur: "0px",
    contrast: "100%",
    brightness: "1",
    invert: "0%",
    sepia: "0%"
  }

  filters = Object.assign({}, this.defaultFilters);

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
    this.filters = Object.assign({}, this.defaultFilters);
  }

  toggleGray() {
    this.filters.grayscale = this.filters.grayscale === this.defaultFilters.grayscale ? "80%" : this.defaultFilters.grayscale;
  }

  toggleBlur() {
    this.filters.blur = this.filters.blur === this.defaultFilters.blur ? "2px" : this.defaultFilters.blur;
  }

  toggleContrast() {
    this.filters.contrast = this.filters.contrast === this.defaultFilters.contrast ? "150%" : this.defaultFilters.contrast;
  }

  toggleBright() {
    this.filters.brightness = this.filters.brightness === this.defaultFilters.brightness ? "1.5" : this.defaultFilters.brightness;
  }

  toggleInvert() {
    this.filters.invert = this.filters.invert === this.defaultFilters.invert ? "100%" : this.defaultFilters.invert;
  }

  toggleSepia() {
    this.filters.sepia = this.filters.sepia === this.defaultFilters.sepia ? "80%" : this.defaultFilters.sepia;
  }
}

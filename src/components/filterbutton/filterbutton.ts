import { Component, forwardRef, Inject } from '@angular/core';
import {ImageviewComponent} from '../imageview/imageview'
/**
 * Generated class for the FilterbuttonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filterbutton',
  templateUrl: 'filterbutton.html',
  providers:[ImageviewComponent]
})
export class FilterbuttonComponent {

  text: string;

  constructor(@Inject(forwardRef(() => ImageviewComponent))private imgcomp: ImageviewComponent) {
    console.log('Hello FilterbuttonComponent Component');
    this.text = 'Hello World';
  }
  applyFilter(){
    this.imgcomp.applyfilter();
  }
}

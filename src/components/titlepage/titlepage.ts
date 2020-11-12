import { Component } from '@angular/core';

/**
 * Generated class for the TitlepageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'titlepage',
  templateUrl: 'titlepage.html'
})
export class TitlepageComponent {

  text: string;

  constructor() {
    console.log('Hello TitlepageComponent Component');
    this.text = 'Apply Filters';
  }

}

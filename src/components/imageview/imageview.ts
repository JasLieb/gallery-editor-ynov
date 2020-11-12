import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import { getQueryValue } from '@angular/core/src/view/query';

/**
 * Generated class for the ImageviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imageview',
  templateUrl: 'imageview.html'
})
export class ImageviewComponent {
  status: boolean = false;
  cep: boolean = false;
  flou: boolean = false;
  constructor() {
    console.log('Hello ImageviewComponent Component');
    
    
    
  }
  
  
  applyfilter(){
    this.status = !this.status;
  }
  applyfilterCep(){
    this.cep = !this.cep
  }
  applyfilterFlou(){
    this.flou = !this.flou
  }
}

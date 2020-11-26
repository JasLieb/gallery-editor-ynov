import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import { getQueryValue } from '@angular/core/src/view/query';

interface FilterOptions {
  grey: boolean;
  cep: boolean;
  flou: boolean;
}

@Component({
  selector: 'imageview',
  templateUrl: 'imageview.html'
})
export class ImageviewComponent {
  private options: FilterOptions;
  imageFilterStyle: string = '';

  constructor() {
    console.log('Hello ImageviewComponent Component');
    this.options = {
      grey: false, 
      cep: false, 
      flou: false
    } as FilterOptions;
  }

  formatFilterOptions(): object {
    const greyClass = this.options.grey
      ? 'grayscale(1)'
      : 'grayscale(0)';

    const cepClass = this.options.cep
      ? 'sepia(1)'
      : 'sepia(0)';

    const flouClass = this.options.flou
      ? 'blur(2px)'
      : 'blur(0)';

    return {'filter': `${greyClass} ${cepClass} ${flouClass}`};
  }
  
  applyfilter(){
    this.options = {
      ...this.options,
      grey: !this.options.grey
    }
  }

  applyfilterCep(){
    this.options = {
      ...this.options,
      cep: !this.options.cep
    }
  }

  applyfilterFlou(){
    this.options = {
      ...this.options,
      flou: !this.options.flou
    }
  }
}

import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ImageFilter } from '../../models/ImageFilter';

/**
 * Generated class for the PhotoEditorPreviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'photo-editor-preview',
  templateUrl: 'photo-editor-preview.html'
})
export class PhotoEditorPreviewComponent {

  @Input()
  filter: ImageFilter;

  @Input()
  imageSrc: string = "";

  @Input()
  name: string = "";

  @Output("action") action: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  applyFilter() {
    this.action.emit();
  }

}

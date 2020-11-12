import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoEditorPage } from './photo-editor';

@NgModule({
  declarations: [
    PhotoEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoEditorPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotoEditorPageModule {}

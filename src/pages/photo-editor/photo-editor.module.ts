import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoEditorPage } from './photo-editor';

@NgModule({
  declarations: [
    PhotoEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoEditorPage),
  ],
})
export class PhotoEditorPageModule {}

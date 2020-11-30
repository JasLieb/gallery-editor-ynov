import { NgModule } from "@angular/core";
import { GalleryComponent } from "./gallery/gallery";
import { CameraComponent } from "./camera/camera";
import { CameraPreview } from "@ionic-native/camera-preview";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp } from "ionic-angular/components/app/app-root";
import { IonicModule } from "ionic-angular";
import { PhotoEditorPreviewComponent } from './photo-editor-preview/photo-editor-preview';

@NgModule({
  declarations: [GalleryComponent, CameraComponent,
    PhotoEditorPreviewComponent],
  imports: [BrowserModule, IonicModule],
  bootstrap: [IonicApp],
  exports: [GalleryComponent, CameraComponent,
    PhotoEditorPreviewComponent],
  providers: [CameraPreview],
})
export class ComponentsModule {}

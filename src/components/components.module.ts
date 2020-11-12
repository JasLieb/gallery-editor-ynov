import { NgModule } from "@angular/core";
import { GalleryComponent } from "./gallery/gallery";
import { CameraComponent } from "./camera/camera";
import { CameraPreview } from "@ionic-native/camera-preview";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp } from "ionic-angular/components/app/app-root";
import { IonicModule } from "ionic-angular";

import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [GalleryComponent, CameraComponent],
  imports: [BrowserModule, IonicModule],
  bootstrap: [IonicApp],
  exports: [GalleryComponent, CameraComponent],
  providers: [CameraPreview, Camera],
})
export class ComponentsModule {}

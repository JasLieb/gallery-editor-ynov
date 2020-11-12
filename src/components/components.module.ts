import { NgModule } from "@angular/core";
import { GalleryComponent } from "./gallery/gallery";
import { CameraComponent } from "./camera/camera";
import { CameraPreview } from "@ionic-native/camera-preview";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp } from "ionic-angular/components/app/app-root";
import { IonicModule } from "ionic-angular";
import { ImageviewComponent } from './imageview/imageview';
import { FilterbuttonComponent } from './filterbutton/filterbutton';
import { TitlepageComponent } from './titlepage/titlepage';

@NgModule({
  declarations: [GalleryComponent, CameraComponent,
    ImageviewComponent,
    FilterbuttonComponent,
    TitlepageComponent],
  imports: [BrowserModule, IonicModule],
  bootstrap: [IonicApp],
  exports: [GalleryComponent, CameraComponent,
    ImageviewComponent,
    FilterbuttonComponent,
    TitlepageComponent],
  providers: [CameraPreview],
})
export class ComponentsModule {}

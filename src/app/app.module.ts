import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
=======
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
>>>>>>> 4e94c9913749f6aaeac970ebc597812b1fc9a8f2
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
<<<<<<< HEAD
import { PhotoService } from '../services/photo.service';
import { IonicStorageModule } from '@ionic/storage';
=======
import { SearchService } from '../services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilsHttpService } from '../services/http/utils.http.service';
>>>>>>> 4e94c9913749f6aaeac970ebc597812b1fc9a8f2

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,        
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    PhotoService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
=======
    SearchService,
    UtilsHttpService
  ],
>>>>>>> 4e94c9913749f6aaeac970ebc597812b1fc9a8f2
})
export class AppModule {}

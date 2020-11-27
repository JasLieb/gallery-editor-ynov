import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { ComponentsModule } from '../components/components.module';
import { SearchService } from '../services/search/search.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestoreModule,
    SearchService
  ]
})
export class AppModule {}

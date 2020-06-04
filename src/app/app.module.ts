import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ArticulosService} from '../app/services/Articulos.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';

import {AngularFireDatabaseModule} from 'angularfire2/database';
  import { from } from 'rxjs';
 import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig={
  apiKey: "AIzaSyBMt6Wm5n1Q5mGdBJKncsMbfmNvXv-lvYY",
  authDomain: "ioniccrud-60e4e.firebaseapp.com",
  databaseURL: "https://ioniccrud-60e4e.firebaseio.com",
  projectId: "ioniccrud-60e4e",
  storageBucket: "ioniccrud-60e4e.appspot.com",
  messagingSenderId: "1026478138513",
  appId: "1:1026478138513:web:770f29ec2ce3e086338b30",
  measurementId: "G-QGV2W9RNGH"
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule ,AngularFireModule.initializeApp(firebaseConfig,'ioniccrud' )],
  providers: [
    StatusBar,
    ArticulosService,
    AngularFireDatabase,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

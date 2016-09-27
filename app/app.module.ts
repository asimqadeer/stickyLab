import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//we had import FormsModule in order to play around with input fields and two day data binding
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';

import * as firebase from "firebase";
import { AngularFireModule } from 'angularfire2';

import { AppComponent }  from './app.component';
import {StickerGridComponent} from './components/stickerGrid/stickerGrid.component';
import {StickerDetailComponent} from './components/stickerDetail/stickerDetail.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "<your-key>",
  authDomain: "<your-project-authdomain>",
  databaseURL: "<your-database-URL>",
  storageBucket: "<your-storage-bucket>"
};


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing,
     //AngularFireModule.initializeApp(firebaseConfig)
    ],
  declarations: [ 
    AppComponent,
    StickerGridComponent,
    StickerDetailComponent
    ],
  bootstrap:    [ 
    AppComponent
     ]
})

export class AppModule { }

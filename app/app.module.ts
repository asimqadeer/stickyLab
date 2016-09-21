import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//we had import FormsModule in order to play around with input fields and two day data binding
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import {StickerGridComponent} from './components/stickerGrid/stickerGrid.component';
import {StickerDetailComponent} from './components/stickerDetail/stickerDetail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing
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

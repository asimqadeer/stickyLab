import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//we had import FormsModule in order to play around with input fields and two day data binding
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {StickerGridComponent} from './components/stickerGrid/stickerGrid.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule 
    ],
  declarations: [ 
    AppComponent,
    StickerGridComponent
    ],
  bootstrap:    [ 
    AppComponent
     ]
})

export class AppModule { }

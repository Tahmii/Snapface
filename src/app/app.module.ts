import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './Component/face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './Component/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './Component/header/header.component';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './Component/single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }

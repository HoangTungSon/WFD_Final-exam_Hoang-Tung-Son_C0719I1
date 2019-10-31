import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ReadPageComponent } from './read-page/read-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    ReadPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

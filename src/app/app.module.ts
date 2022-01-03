import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CORE_SERVICES } from './core/services';
import {COMPONENTS } from './components';
import { SHARED } from './shared';
@NgModule({
  declarations: [AppComponent, COMPONENTS, SHARED],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxTypedJsModule],
  providers: [CORE_SERVICES],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

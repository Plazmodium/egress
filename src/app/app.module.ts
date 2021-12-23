import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CORE_SERVICES } from './core/services';
import {COMPONENTS } from './components';
import { SHARED } from './shared';
@NgModule({
  declarations: [AppComponent, COMPONENTS, SHARED],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CORE_SERVICES],
  bootstrap: [AppComponent],
})
export class AppModule {}

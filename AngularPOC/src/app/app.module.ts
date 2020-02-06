import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonService } from './services/common.service';

import { RequestLogger } from './services/requestlogger.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestLogger,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

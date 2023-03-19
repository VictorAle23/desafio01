import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { BannerdosModule } from './bannerdos/bannerdos.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    BannerModule,
    BannerdosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListpageComponent } from './component/listpage/listpage.component';
import { AstroPageComponent } from './component/astro-page/astro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListpageComponent,
    AstroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

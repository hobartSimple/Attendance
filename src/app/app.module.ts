import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/component/home.component';
import { AboutComponent } from './about/about.component';

import { HomeService } from './home/service/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

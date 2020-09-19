import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionIntroComponent } from './section-intro/section-intro.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionWorkComponent } from './section-work/section-work.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionIntroComponent,
    SectionAboutComponent,
    SectionWorkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageComponent } from './shared/page/page.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

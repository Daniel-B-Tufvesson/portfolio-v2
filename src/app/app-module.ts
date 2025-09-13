import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageComponent } from './shared/page/page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './features/home/about/about.component';
import { DataService } from './services/data.service';
import { ProjectGridComponent } from './features/home/project-grid/projectgrid.component';
import { VSPProjectPage } from './features/volume-space-program/vsp-project.component';
import { VSPDemoComponent } from './features/volume-space-program/vsp-demo/vsp-demo.component';
import { ProjectSectionComponent } from './shared/project-section/project-section.component';
import { BoneBreakerPage } from './features/bone-breaker/bone-breaker-project.component';
import { BoneBreakerDemoComponent } from './features/bone-breaker/bone-breaker-demo/bone-breaker-demo.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    AboutComponent,
    ProjectGridComponent,
    HomeComponent,
    ProjectSectionComponent,
    VSPDemoComponent,
    VSPProjectPage,
    BoneBreakerDemoComponent,
    BoneBreakerPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    DataService
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

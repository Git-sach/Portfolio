import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ExperiencesComponent } from './container/experiences/experiences.component';
import { SlidingTextDirective } from './shared/directives/sliding-text.directive';

import { PortfolioComponent } from './container/portfolio/portfolio.component';
import { SlidingImgDirective } from './shared/directives/sliding-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ExperiencesComponent,
    PortfolioComponent,
    SlidingTextDirective,
    SlidingImgDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

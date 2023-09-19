import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ExperiencesComponent } from './container/experiences/experiences.component';
import { SlidingTextDirective } from './shared/directives/sliding-text.directive';

import { PortfolioComponent } from './container/portfolio/portfolio.component';
import { SlidingImgDirective } from './shared/directives/sliding-img.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './container/about/about.component';
import { TestimonialsComponent } from './container/testimonials/testimonials.component';
import { SeparatorComponent } from './shared/components/separator/separator.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsFormComponent } from './container/testimonials/testimonials-form/testimonials-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ExperiencesComponent,
    PortfolioComponent,
    SlidingTextDirective,
    SlidingImgDirective,
    AccueilComponent,
    AboutComponent,
    TestimonialsComponent,
    SeparatorComponent,
    FooterComponent,
    TestimonialsFormComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

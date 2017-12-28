import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsaComponent } from './usa/usa.component';
import { CanComponent } from './can/can.component';
import { NonComponent } from './non/non.component';
import { MeComponent } from './me/me.component';
import { ContactComponent } from './contact/contact.component';
import { CaruselComponent } from './carusel/carousel.component';
import { Page404Component } from './page404/page404.component';
import { AlertModule, AccordionModule, CarouselModule ,CollapseModule,DatepickerModule,BsDropdownModule,
   ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule,SortableModule,TabsModule
  , TooltipModule,TypeaheadModule } from 'ngx-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsaComponent,
    CanComponent,
    NonComponent,
    MeComponent,
    Page404Component,
    CarouselComponent,
    ContactComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
     RatingModule.forRoot(),
     SortableModule.forRoot(),
     TabsModule.forRoot(),
      TooltipModule .forRoot(),
      TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

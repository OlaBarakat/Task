import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule, NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap/accordion/accordion.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingPageComponent } from './component/home/landing-page/landing-page.component';
import { GovernorateComponent } from './component/home/governorate/governorate.component';
import { NavbarComponent } from './component/home/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LandingPageComponent,
    GovernorateComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbPaginationModule,
     NgbAlertModule,
     NgbCollapseModule,
     NgbDropdownModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

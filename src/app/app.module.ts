import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { InformationComponent } from './main/main-page/information/information.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    ServicesComponent,
    MainComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

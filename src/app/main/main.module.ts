import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationComponent } from './main-page/information/information.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ServiceComponent } from './services/service/service.component';
import { PayComponent } from './pay/pay.component'

// export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    ContactUsComponent,
    FooterComponent,
    InformationComponent,
    MainPageComponent,
    ServicesComponent,
    AboutUsComponent,
    ServiceComponent,
    PayComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class MainModule { }

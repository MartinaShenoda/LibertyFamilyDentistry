import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"", component: MainPageComponent},
  {path:"about-us", component: AboutUsComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path:"services", component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

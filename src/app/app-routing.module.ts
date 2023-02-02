import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LandingPageComponent } from './component/home/landing-page/landing-page.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'home',component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

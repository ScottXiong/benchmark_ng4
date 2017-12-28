import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {Page404Component} from './page404/page404.component';
import {CanComponent} from './can/can.component';
import {UsaComponent} from './usa/usa.component';
import {MeComponent} from './me/me.component';
import {NonComponent} from './non/non.component';

const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'usa',component: UsaComponent},
   {path:'me',component: MeComponent},
   {path:'non',component: NonComponent},
   {path:'can',component: CanComponent},
   {path:'**',component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

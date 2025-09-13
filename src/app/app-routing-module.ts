import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { VSPProjectPage } from './features/volume-space-program/vsp-project.component';
import { BoneBreakerPage } from './features/bone-breaker/bone-breaker-project.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/vsp', component: VSPProjectPage},
  {path: 'projects/bone-breaker', component: BoneBreakerPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

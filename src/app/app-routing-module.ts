import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { VSPProjectPage } from './features/volume-space-program/vsp-project.component';
import { BoneBreakerPage } from './features/bone-breaker/bone-breaker-project.component';
import { UnearthedProjectPage } from './features/unearthed/unearthed-project.component';
import { BachelorsThesisPage } from './features/bachelors-thesis/bachelors-thesis.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/vsp', component: VSPProjectPage},
  {path: 'projects/bone-breaker', component: BoneBreakerPage},
  {path: 'projects/unearthed', component: UnearthedProjectPage},
  {path: 'projects/bachelors-thesis', component: BachelorsThesisPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from '../shared/components/main-landing/main-landing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: MainLandingComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: "full" },
      { path: 'dashboard', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

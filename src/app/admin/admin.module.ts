import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule, CanvasJS } from '@canvasjs/angular-charts';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CanvasJSAngularChartsModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }

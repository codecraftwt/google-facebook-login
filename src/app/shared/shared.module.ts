import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MainLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    MainLandingComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './../material/material.module';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatProgressBarModule
  ]
})
export class AdminModule { }

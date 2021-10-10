import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartContainer } from './chart.container';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ChartContainer,
    ChartComponent
  ],
  exports: [
    ChartComponent,
    ChartContainer,
  ],
  imports: [
    CommonModule,
    ChartModule,
    ButtonModule,
  ]
})
export class ChartModuleUI { }

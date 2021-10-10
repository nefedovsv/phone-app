import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsContainer } from './details.container';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DetailsContainer,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RatingModule,
    ButtonModule,
    ReactiveFormsModule,
  ]
})
export class DetailsModuleUI { }

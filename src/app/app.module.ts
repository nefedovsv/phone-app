import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModuleUI } from './features/chart/chart.module';
import { PhonesDataModule } from '../data/phones/phones.module';
import { TableModuleUI } from './features/table/table.module';
import { DetailsModuleUI } from './features/details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModuleUI,
    TableModuleUI,
    DetailsModuleUI,
    PhonesDataModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

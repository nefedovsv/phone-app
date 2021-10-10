import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartContainer } from './features/chart/chart.container';
import { TableContainer } from './features/table/table.container';
import { DetailsContainer } from './features/details/details.container';

const routes: Routes = [
  {
    path: 'chart',
    component: ChartContainer
  },
  {
    path: 'table',
    component: TableContainer
  },
  {
    path: 'details',
    children: [{ path: '**', component: DetailsContainer }],
  },
  {
    path: '**',
    redirectTo: '/chart',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

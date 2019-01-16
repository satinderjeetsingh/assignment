import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmChartComponent } from './am-chart/am-chart.component';

import { D3VisComponent } from './d3-vis/d3-vis.component';
import { LoginFbComponent } from './login-fb/login-fb.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
 
const routes: Routes = [
  { path: "AmCharts", component: AmChartComponent},
  { path:"Chart-js", component : ChartJsComponent},
  { path: "D3", component: D3VisComponent},
  { path: "Login", component: LoginFbComponent},
  { path : "Timeline-Chart", component : TimelineChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AmChartComponent,
                                  D3VisComponent,
                                  LoginFbComponent,
                                  TimelineChartComponent,
                                  ChartJsComponent]
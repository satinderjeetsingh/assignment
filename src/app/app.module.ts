import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login';
import { FacebookLoginProvider } from 'angular-6-social-login';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { NvD3Module } from 'ng2-nvd3';


export function getAuthServiceConfigs(){
  let config = new AuthServiceConfig
  (
    [
      {
      id : FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("1983012798674429"),
      },
    ]
  );
  
  return config;
}

@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, TimelineChartComponent, ChartJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SocialLoginModule, 
    NvD3Module
  ],
  providers: [
    { 
      provide : AuthServiceConfig,
      useFactory : getAuthServiceConfigs
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
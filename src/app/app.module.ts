import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardapexComponent } from './pages/dashboardapex/dashboardapex.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardhighchartComponent } from './pages/dashboardhighchart/dashboardhighchart.component';
//import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { BarapexchartComponent } from './pages/barapexchart/barapexchart.component';
import { BarhighchartComponent } from './pages/barhighchart/barhighchart.component';
@NgModule({
  declarations: [
    AppComponent,   
    AdminLayoutComponent,
    AuthLayoutComponent,
    DashboardapexComponent,
    DashboardhighchartComponent,
    BarapexchartComponent,
    BarhighchartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgApexchartsModule,
    //HighchartsChartModule,
    ChartModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

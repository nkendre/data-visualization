import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  constructor() { }

  createHorizonatalBarChart(el:any, cfg:any) {
    Highcharts.chart(el, cfg);
  }
}


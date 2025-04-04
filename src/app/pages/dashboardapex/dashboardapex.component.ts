import { Component } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-dashboardapex',
  templateUrl: './dashboardapex.component.html',
  styleUrl: './dashboardapex.component.scss'
})
export class DashboardapexComponent {
  //@ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  //Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Avrage",
          type: "column",
          data: [55, 44, 35, 27, 19, 22, 37, 45, 44, 57, 30]
        },
        {
          name: "Strike rate",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: "HS",
          type: "line",
          data: [100, 90, 150, 70, 150, 80, 64, 52, 59, 70, 39]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
        "01/01/2023",
        "02/01/2023",
        "03/01/2023",
        "04/01/2023",
        "05/01/2023",
        "06/01/2023",
        "07/01/2023",
        "08/01/2023",
        "09/01/2023",
        "10/01/2023",
        "11/01/2023"
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        title: {
          text: "Points"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y:any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }

  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
}

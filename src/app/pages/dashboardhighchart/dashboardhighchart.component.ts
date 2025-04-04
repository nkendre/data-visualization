import { Component,OnInit,Optional,AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
//import { first } from 'rxjs/operators';
import { Options } from 'highcharts';
import * as _ from 'lodash';
import { HighchartsService } from '../../services/highcharts.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboardhighchart',
  templateUrl: './dashboardhighchart.component.html',
  styleUrl: './dashboardhighchart.component.scss'
})
export class DashboardhighchartComponent implements OnInit {

  constructor(private highcharts: HighchartsService) {
    //this.createChartColumn();
   }
  chart:any;
  options:any;

  ngOnInit() {
    this.init();
   
  }

  public ngAfterViewInit(): void {
    this.createChartColumn();
    this.highcharts.createHorizonatalBarChart('chart-bar-horizontal', this.horizontalBarOptions);
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    this.chart.addSerie({
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    });
  }

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSerie(this.chart.ref.series.length - 1);
  }

  init() {
    this.options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    };
    let chart = new Chart(this.options);
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(c => console.log(c.options.chart));
  }

  changeType = () => {
    // this.chart.options.chart = {type: 'column'};
    // this.chart.ref$.pipe(first()).subscribe(chart => {
    //   // chart.update({ chart: { type: 'column' } });
    //   this.updateChart({ chart: { type: 'column' } });
    // })
  }

  private updateChart = (options: Options) => {
    // By default if the value of the object property is undefined lodash won't use this but keeps
    // the original after using _.merge(). We can customize the merge with _.mergeWith().
    // If we return undefined inside the customizer function lodash handles the merge like above not keeping the undefined value.
    // With deleting the property we trick lodash and with this the property gets undefined value after the merge.
    const customizer = (_objValue: Optional, srcValue: Optional, key: any, object: any) => {
      if (srcValue === undefined) delete object[key];
    };

    console.log(options.chart, options.plotOptions);
    const mergedOptions = _.mergeWith(this.options, options, customizer);
    console.log(mergedOptions.chart, mergedOptions.plotOptions);

    this.chart = new Chart(mergedOptions);
  };

  horizontalBarOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart (runs by year all format)'
    },
    xAxis: {
      categories: ['2019','2020', '2021', '2022', '2023', '2024']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total runs scored'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'T20',
      data: [350,295, 299, 639, 781, 300]
    }, {
      name: 'Test',
      data: [400,116, 536, 265, 671, 58]
    }, {
      name: 'ODI',
      data: [550,431, 129, 302, 1,377, 661]
    }]
  };


  private createChartColumn(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart('chart-bar' as any, {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Column Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [{
        name: 'Amount',
        data,
      }],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      }, true, true);
    }, 1500);

  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


}

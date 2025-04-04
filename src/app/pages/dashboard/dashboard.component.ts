import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { CricketDataService } from '../../services/cricket-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public canvas : any;
  public ctx:any;
  public datasets: any;
  public data: any;
  public myChartData:any;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  config :any;

  public barChartLabels:string []=['2020', '2021', '2022', '2023'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  

  public barChartData: any[] = [
    { data: [], label: 'avgData' },
    { data: [], label: 'srData' }
  ];

  constructor(private _cricketData: CricketDataService) {
  }

  ngOnInit() {

    this._cricketData.getT20Data().subscribe(data => {
      this.barChartLabels = Object.keys(data);
      this.barChartLabels.forEach(label => {
        //this.barChartData[0].data.push(data[label]['avgData']);
        //this.barChartData[1].data.push(data[label]['srData']);
      });
    });;


    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

  
    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: '# of runs',
            data: [450, 500, 700, 800, 450, 1150,900,411,500,700],
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        }]
    },
    options: gradientChartOptionsConfigurationWithTooltipRed
    });


    this.canvas = document.getElementById("TestCricketData");
    this.ctx = this.canvas.getContext("2d");


    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var testCricketData = new Chart(this.ctx, {
      type: 'bar',
      //data: data,
      data :  {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [   
          
          {
            label: "HS",
            data: [136, 240, 180, 190,100, 229, 240,90,180,220],
            type: 'line',
            borderColor:'#4BB7FF',
            backgroundColor:'#CDEBFF',
            fill: false
          }
          ,{
            label: "Avrage",
            data: [65, 59, 80, 81, 56, 55, 40,75,55,78],
            borderColor:'#FF7A96',
            borderWidth: 1,
            backgroundColor:'#EAC3CC'
          },
          {
            label: "S/R",
            data: [60, 62, 66, 79, 56, 78, 90,80,50,70],
            borderColor:'#4BB7FF',
            borderWidth: 1,
            backgroundColor:'#CDEBFF'
          } 
        ]
      },
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });

        //options
        var mainChartoptions = {
          responsive: true,
          title: {
            display: true,
            position: 'top',
            text: 'Line Graph',
            fontSize: 18,
            fontColor: '#111',
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: '#333',
              fontSize: 16,
            },
          },
        };
    

    //var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var chart_labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    this.datasets = [
      [45, 42, 75, 76, 55, 68, 19, 28, 26, 57],
      [60.54, 54.05, 60.42, 76.24, 54.34, 63.29, 40.99, 44.08	, 39.43, 54],
      [169, 169, 235, 235, 153, 254, 74, 72, 79, 186]
    ];
    this.data = this.datasets[0];



    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

     this.config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Batting Avrage",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#27AE60',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#27AE60',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.data,
        },
        {
          label: "Batting S/R",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.datasets[1],
        },
        {
          label: "HS",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#2874A6',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#2874A6',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.datasets[2],
        }
      ]
      },
      //options: gradientChartOptionsConfigurationWithTooltipRed
      options: gradientChartOptionsConfigurationWithTooltipRed
    };

    this.myChartData = new Chart(this.ctx, this.config);


    this.canvas = document.getElementById("OnedayBarData");
    this.ctx  = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var  mySampleChart = new Chart(this.ctx, {
      type: 'bar',
      //responsive: true,
    //  legend: {
    //    display: false
    //   },
      data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019','2020', '2021', '2022','2023'],
        datasets: [{
          label: "Runs scored",
          //fill: true,
          backgroundColor: '#EAC3CC',
          hoverBackgroundColor: '#EAC3CC',
          borderColor: '#FF7A96',
          borderWidth: 2,
          //borderDash: [],
          //borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45,23,34,23,34],
        },
        {
          label: "Avrage",
          //fill: true,
          backgroundColor: '#CDEBF',
          hoverBackgroundColor: '#CDEBF',
          borderColor: '#4BB7FF',
          borderWidth: 2,
          //borderDash: [],
          //borderDashOffset: 0.0,
          data: [53, 20, 60, 55, 30, 45,23,34,78,80],
        }
      ]
      },
      options: gradientBarChartConfiguration
    });


    this.canvas = document.getElementById("RunsByCountry");
    this.ctx  = this.canvas.getContext("2d");
    var runsByContrychart = new Chart(this.ctx, {
      type: 'doughnut',

      data: {
        labels: ['England', 'India', 'Australia','South Africa', 'Sri Lanka',' New Zealand','Pakistan',' West Indies'],
        datasets: [
          {
            label: 'Centuries in all format',
            data: [12,16, 10,9,15,7,8,10],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgba(0, 128, 130)',
              'rgba(0, 255, 255)',
              'rgba(128, 128, 128)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
            ],
            hoverOffset: 4,
          },
        ],
      },

      options: {
        //borderRadius: 10,
      },
    });

  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketDataService {

  constructor() { }

  getT20Data() {
    return of({
      year2017: {
        avgData: '55.55',
        srData: '78.5'
      },
      year2018: {
        avgData: '70.11',
        srData: '90.56'
      },
      year2019: {
        avgData: '40.12',
        srData: '50.69'
      },
      year2020: {
        avgData: '70.12',
        srData: '120.64'
      },
      year2021: {
        avgData: '45.10',
        srData: '135.41'
      },
      year2022: {
        avgData: '35.10',
        srData: '100.41'
      },
      year2023: {
        avgData: '60.10',
        srData: '178.41'
      },
      total: {
        avgData: '60.55',
        srData: '137.53'
      }
    });
  }
}

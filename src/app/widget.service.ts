import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  constructor(private http: HttpClient) {}

  getTableData(): Observable<any> {
    const table = [
      {
        'Engine Types': 'B6.7',
        'Model': 'a',
        'TIER 4 FINAL': 20,
        'TIER 3': 15,
        'STAGE V': 10.0,
        OTHER: 5.0,
        EPA21: 12.0,
        'EPA21 CANADA': 7.0,
        EPA17: 10.0,
      },
      {
        'Engine Types': 'L9',
        'Model': 'b',
        'TIER 4 FINAL': 30,
        'TIER 3': 25,
        'STAGE V': 20.0,
        OTHER: 10.0,
        EPA21: 18.0,
        'EPA21 CANADA': 14.0,
        EPA17: 8.0,
      },
      {
        'Engine Types': 'X12',
        'Model': 'c',
        'TIER 4 FINAL': 15,
        'TIER 3': 10,
        'STAGE V': 8.0,
        OTHER: 5.0,
        EPA21: 9.0,
        'EPA21 CANADA': 6.0,
        EPA17: 4.0,
      },
      {
        'Engine Types': 'F3.8',
        'Model': 'd',
        'TIER 4 FINAL': 10,
        'TIER 3': 5,
        'STAGE V': 4.0,
        OTHER: 2.0,
        EPA21: 4.0,
        'EPA21 CANADA': 3.0,
        EPA17: 2.0,
      },
      {
        'Engine Types': 'B4.5',
        'Model': 'e',
        'TIER 4 FINAL': 5,
        'TIER 3': 3,
        'STAGE V': 2.0,
        OTHER: 1.0,
        EPA21: 2.0,
        'EPA21 CANADA': 1.0,
        EPA17: 1.0,
      },
      {
        'Engine Types': 'X15',
        'Model': 'f',
        'TIER 4 FINAL': 10,
        'TIER 3': 5,
        'STAGE V': 3.0,
        OTHER: 1.0,
        EPA21: 2.0,
        'EPA21 CANADA': 1.0,
        EPA17: 1.0,
      },
      {
        'Engine Types': 'F2.8',
        'Model': 'g',
        'TIER 4 FINAL': 5,
        'TIER 3': 2,
        'STAGE V': 1.0,
        OTHER: 0.5,
        EPA21: 1.0,
        'EPA21 CANADA': 0.5,
        EPA17: 0.5,
      },
      {
        'Engine Types': 'other',
        'Model': 'h',
        'TIER 4 FINAL': 2,
        'TIER 3': 1,
        'STAGE V': 0.5,
        OTHER: 0.2,
        EPA21: 0.5,
        'EPA21 CANADA': 0.2,
        EPA17: 0.1,
      },
      {
        'Engine Types': 'G12',
        'Model': 'i',
        'TIER 4 FINAL': 1,
        'TIER 3': 0,
        'STAGE V': 0.0,
        OTHER: 0.0,
        EPA21: 0.0,
        'EPA21 CANADA': 0.0,
        EPA17: 0.0,
      },
    ];
    return of(table);
  }

  getChartConfig(): Observable<any> {
    const chartConfig = {
      chart: {
        type: 'bar',
        stacked: true,
        title: 'Sales by Engine & Certification',
        xAxis: {
          title: 'Engine Types',
          categories: [
            'B6.7',
            'L9',
            'X12',
            'F3.8',
            'B4.5',
            'X15',
            'F2.8',
            'other',
            'G12',
          ],
        },
        yAxis: {
          title: 'Sales (in millions)',
          labels: {
            format: '{value}M',
          },
        },
        series: [
          {
            name: 'TIER 4 FINAL',
            data: [20, 30, 15, 10, 5, 10, 5, 2, 1],
            color: '#a6d96a',
          },
          {
            name: 'TIER 3',
            data: [15, 25, 10, 5, 3, 5, 2, 1, 0],
            color: '#fdae61',
          },
          {
            name: 'STAGE V',
            data: [10, 20, 8, 4, 2, 3, 1, 0.5, 0],
            color: '#fee08b',
          },
          {
            name: 'OTHER',
            data: [5, 10, 5, 2, 1, 1, 0.5, 0.2, 0],
            color: '#d73027',
          },
          {
            name: 'EPA21',
            data: [12, 18, 9, 4, 2, 2, 1, 0.5, 0],
            color: '#4575b4',
          },
          {
            name: 'EPA21 CANADA',
            data: [7, 14, 6, 3, 1, 1, 0.5, 0.2, 0],
            color: '#91bfdb',
          },
          {
            name: 'EPA17',
            data: [10, 8, 4, 2, 1, 1, 0.5, 0.1, 0],
            color: '#f46d43',
          },
        ],
        legend: {
          enabled: true,
          position: 'top',
        },
      },
    };
    return of(chartConfig);
    // return this.http.get(this.apiUrl);
  }
  get2ndChartConfig(): Observable<any> {
    const chartConfig = {
      chart: {
        type: 'bar',
        stacked: true,
        title: 'Sales by Engine & Certification',
        xAxis: {
          title: 'Engine Types',
          categories: [
            'B6.7',
            'L9',
            'X12',
            'F3.8',
            'B4.5',
            'X15',
            'F2.8',
            'other',
            'G12',
          ],
        },
        yAxis: {
          title: 'Sales (in millions)',
          labels: {
            format: '{value}M',
          },
        },
        series: [
          {
            name: 'TIER 4 FINAL',
            data: [0.5, 0.2,10, 5, 2, 1, 1,5,   0 ],
            color: '#a6d96a',
          },
          {
            name: 'TIER 3',
            data: [4, 2, 1, 1, 0.5,10, 8,  0.1, 0],
            color: '#fdae61',
          },
          {
            name: 'STAGE V',
            data: [ 1, 0.5, 0.2, 0,7, 14, 6, 3, 1,],
            color: '#fee08b',
          },
          {
            name: 'OTHER',
            data: [5, 10, 5, 2, 1, 20, 30, 15, 10],
            color: '#d73027',
          },
          {
            name: 'EPA21',
            data: [12, 18, 9, 4, 2, 2, 1, 0.5, 0],
            color: '#4575b4',
          },
          {
            name: 'EPA21 CANADA',
            data: [10, 20, 8, 4, 2, 3, 1, 0.5, 0],
            color: '#91bfdb',
          },
          {
            name: 'EPA17',
            data: [15, 25, 10, 5, 3, 5, 2, 1, 0 ],
            color: '#f46d43',
          },
        ],
        legend: {
          enabled: true,
          position: 'top',
        },
      },
    };
    return of(chartConfig);
    // return this.http.get(this.apiUrl);
  }
}

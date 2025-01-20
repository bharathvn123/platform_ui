import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxEchartsModule, MatButtonModule],
  // providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  filters: any[] = [];
  selectedValues: { [key: string]: string } = {};
  kpiCards: any[] = [];

  chartOptions: any;

  constructor(private service: DashboardService, private router: Router) {}

  ngOnInit(): void {
    this.service.getFilters().subscribe((data) => {
      this.filters = data.filters;
      // Initialize default values
      this.filters.forEach((filter) => {
        this.selectedValues[filter.id] = filter.default;
      });
    });

    this.service.getCards().subscribe((data: any) => {
      this.kpiCards = data.kpiCards;
    });

    this.service.getChartConfig().subscribe((config) => {
      this.chartOptions = this.mapConfigToECharts(config.chart);
    });
  }

  // onValueChange(filterId: string, value: string): void {
  //   this.selectedValues[filterId] = value;
  //   console.log(`Filter ${filterId} updated to ${value}`);
  // }

  onValueChange(filterId: string, event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.selectedValues[filterId] = target.value;
      console.log(`Filter ${filterId} updated to ${target.value}`);
    }
  }

  mapConfigToECharts(config: any): any {
    return {
      title: {
        text: config.title,
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      legend: {
        data: config.series.map((s: any) => s.name),
        top: config.legend.position === 'top' ? 0 : 'auto',
      },
      xAxis: {
        type: 'category',
        name: config.xAxis.title,
        data: config.xAxis.categories,
      },
      yAxis: {
        type: 'value',
        name: config.yAxis.title,
        axisLabel: {
          formatter: (value: number) =>
            config.yAxis.labels.format.replace('{value}', value.toString()),
        },
      },
      series: config.series.map((s: any) => ({
        name: s.name,
        type: config.type,
        data: s.data,
        stack: config.stacked ? 'total' : null,
        itemStyle: {
          color: s.color,
        },
      })),
    };
  }

  adminPage() {
    this.router.navigate(['/admin']);
  }
}

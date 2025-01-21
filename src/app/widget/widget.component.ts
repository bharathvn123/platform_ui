import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    NgxEchartsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatRadioModule,
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent implements OnInit {
  constructor(private service: WidgetService) {}

  selectedValue: string = 'Engine Types';
  selectedTableValue: string = 'Table 1';
  ChartType: string = 'bar';
  ss: string = '1';

  chartOptions: any;
  salesData = [];
  foods: Food[] = [
    // {value: 'steak-0', viewValue: 'Steak'},
    // {value: 'pizza-1', viewValue: 'Pizza'},
    // {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  xAxisLable: string[] = [
    'B6.7',
    'L9',
    'X12',
    'F3.8',
    'B4.5',
    'X15',
    'F2.8',
    'other',
    'G12',
  ];
  engineTypes: string[] = [];
  columnNames: string[] = [];
  TableNames: string[] = ['Table 1', 'Table 2'];
  ngOnInit(): void {
    this.service.getTableData().subscribe((data: any) => {
      this.salesData = data;
      console.table(this.salesData);
      this.engineTypes = this.salesData.map((item) => item['Engine Types']);
      console.table(this.engineTypes);
      this.columnNames = Object.keys(this.salesData[0]);
      // this.engineTypes = this.salesData.map((item) => item['Engine Types']);
    });

    // this.service.getChartConfig().subscribe((config: any) => {
    //   this.chartOptions = this.mapConfigToECharts(config.chart);
    // });
    this.getChart();
  }

  getChart() {
    this.service.getChartConfig().subscribe((config: any) => {
      this.chartOptions = this.mapConfigToECharts(config.chart);
    });
  }
  get2ndChart() {
    this.service.get2ndChartConfig().subscribe((config: any) => {
      this.chartOptions = this.mapConfigToECharts(config.chart);
    });
  }
  mapConfigToECharts(config: any): any {
    return {
      title: {
        text: config.title,
        left: 'top',
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
        // data: config.xAxis.categories,
        // name: this.xAxisLable,
        data: this.xAxisLable,
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
        type: this.ChartType,
        // type: config.type,
        data: s.data,
        stack: config.stacked ? 'total' : null,
        itemStyle: {
          color: s.color,
        },
      })),
    };
  }
  // options = [];

  onSelectChange(event: MatSelectChange): void {
    // const target = event.target as HTMLSelectElement;
    // this.selectedValue = target.value;
    // console.log('Selected Value:', this.selectedValue);

    this.selectedValue = event.value; // Get the selected value
    console.log('Selected Value:', this.selectedValue);

    this.xAxisLable = this.salesData.map((item) => item[this.selectedValue]);
    // console.table(this.xAxisLable);

    this.getChart();
  }

  onSelectTableChange(event: MatSelectChange): void {
    this.selectedTableValue = event.value; // Get the selected value
    console.log('Selected  Table Value:', this.selectedTableValue);

    if (this.selectedTableValue === 'Table 1') {
      this.getChart();
    } else {
      this.get2ndChart();
    }
  }

  onSelectionChange(event: any): void {
    if (event.value === '1') {
      this.ChartType = 'bar';
    } else {
      this.ChartType = 'line';
    }

    if (this.selectedTableValue === 'Table 1') {
      this.getChart();
    } else {
      this.get2ndChart();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DashboardService } from '../dashboard.service';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const ELEMENT_DATA: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  displayedColumns1: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA;

  dropdown: boolean = false;
  lable: boolean = false;

  constructor(public service: DashboardService) {}
ngOnInit(): void {
  this.service.getFilters().subscribe((data) => {
    this.dataSource = data.filters;
    // Initialize default values
    // this.filters.forEach((filter) => {
    //   this.selectedValues[filter.id] = filter.default;
    // });
  });



  this.service.getCards().subscribe((data:any) => {
    this.dataSource1 = data.kpiCards;
  });
}



selectDropdownTable() {
this.dropdown = true;
this.lable = false;
}

selectLableTable() {
  this.dropdown = false;
  this.lable = true;
  }
}
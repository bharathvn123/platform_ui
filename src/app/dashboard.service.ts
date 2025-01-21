import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // public configUrl = 'assets/filter-config.json';
  public configUrl = 'assets/filter-config.json';

  // public filterConfig = {
  //   "filters": [
  //     {
  //       "id": "segment",
  //       "type": "dropdown",
  //       "label": "Segment",
  //       "options": ["All", "Segment1", "Segment2", "Segment3"],
  //       "default": "All"
  //     },
  //     {
  //       "id": "subSegment",
  //       "type": "dropdown",
  //       "label": "Sub-Segment",
  //       "options": ["All", "SubSegment1", "SubSegment2"],
  //       "default": "All"
  //     },
  //     {
  //       "id": "application",
  //       "type": "dropdown",
  //       "label": "Application",
  //       "options": ["FIRE TRUCK", "Application1", "Application2"],
  //       "default": "FIRE TRUCK"
  //     },
  //     {
  //       "id": "customerName",
  //       "type": "dropdown",
  //       "label": "Customer Name",
  //       "options": ["All", "Customer1", "Customer2"],
  //       "default": "All"
  //     },
  //     {
  //       "id": "customerSpec",
  //       "type": "dropdown",
  //       "label": "Customer_Spec",
  //       "options": ["All", "Spec1", "Spec2"],
  //       "default": "All"
  //     },
  //     {
  //       "id": "mainReason",
  //       "type": "dropdown",
  //       "label": "Main Reason (Within Customer)",
  //       "options": ["All", "Reason1", "Reason2"],
  //       "default": "All"
  //     },
  //     {
  //       "id": "engine",
  //       "type": "dropdown",
  //       "label": "Engine",
  //       "options": ["L9", "Engine1", "Engine2"],
  //       "default": "L9"
  //     },
  //     {
  //       "id": "certification",
  //       "type": "dropdown",
  //       "label": "Certification",
  //       "options": ["EPA21", "Certification1", "Certification2"],
  //       "default": "EPA21"
  //     },
  //     {
  //       "id": "hp",
  //       "type": "dropdown",
  //       "label": "HP",
  //       "options": ["450", "500", "600"],
  //       "default": "450"
  //     }
  //   ]
  // }
  

  constructor(private http: HttpClient) {}

  // getFilters(): Observable<any> {
  //   return this.http.get("assets/filter-config.json");
  // }
  getFilters(): Observable<any> {
    const filterConfig = {
      "filters": [
        {
          "id": "segment",
          "type": "dropdown",
          "label": "Segment",
          "options": ["All", "Segment1", "Segment2", "Segment3"],
          "default": "All"
        },
        {
          "id": "subSegment",
          "type": "dropdown",
          "label": "Sub-Segment",
          "options": ["All", "SubSegment1", "SubSegment2"],
          "default": "All"
        },
        {
          "id": "application",
          "type": "dropdown",
          "label": "Application",
          "options": ["FIRE TRUCK", "Application1", "Application2"],
          "default": "FIRE TRUCK"
        },
        {
          "id": "customerName",
          "type": "dropdown",
          "label": "Customer Name",
          "options": ["All", "Customer1", "Customer2"],
          "default": "All"
        },
        {
          "id": "customerSpec",
          "type": "dropdown",
          "label": "Customer_Spec",
          "options": ["All", "Spec1", "Spec2"],
          "default": "All"
        },
        {
          "id": "customerSpec",
          "type": "dropdown",
          "label": "Customer_Spec",
          "options": ["All", "Spec1", "Spec2"],
          "default": "All"
        },
        // {
        //   "id": "engine",
        //   "type": "dropdown",
        //   "label": "Engine",
        //   "options": ["L9", "Engine1", "Engine2"],
        //   "default": "L9"
        // },
        {
          "id": "certification",
          "type": "dropdown",
          "label": "Certification",
          "options": ["EPA21", "Certification1", "Certification2"],
          "default": "EPA21"
        },
        {
          "id": "hp",
          "type": "dropdown",
          "label": "HP",
          "options": ["450", "500", "600"],
          "default": "500"
        }
      ]
    };
    return of(filterConfig);
    return this.http.get("src\assets\filter-config.json");
    return of('src\assets\filter-config.json');
  }


  getCards(): Observable<any> {
    const cardConfig = {"kpiCards": [
      {
        "id": "2024Sales",
        "label": "2024 Salesss",
        "value": "242888M",
        "type": "text",
        "style": {
          "fontSize": "24px",
          "fontWeight": "bold"
        }
      },
      {
        "id": "filtered2024Sales",
        "label": "Filtered 2024 Sales",
        "value": "17M",
        "type": "text",
        "style": {
          "fontSize": "24px",
          "fontWeight": "bold"
        }
      },
      {
        "id": "dbuMargin",
        "label": "DBU Margin%",
        "value": "22%",
        "type": "text",
        "style": {
          "fontSize": "24px",
          "fontWeight": "bold",
          "color": "red"
        }
      },
      {
        "id": "dbuMargin",
        "label": "Margin%",
        "value": "22%",
        "type": "text",
        "style": {
          "fontSize": "24px",
          "fontWeight": "bold",
          "color": "blue"
        }
      },
      {
        "id": "dbuMargin",
        "label": "DBU Margin%",
        "value": "22%",
        "type": "text",
        "style": {
          "fontSize": "24px",
          "fontWeight": "bold",
          "color": "red"
        }
      },
      {
        "id": "dbuMargin",
        "label": "DBU Margin%",
        "value": "22%",
        "type": "text",
        "style": {
          "fontSize": "24px",
          "fontWeight": "bold",
          "color": "red"
        }
      }
    ],
}
    return of(cardConfig);
  }
  getChartConfig(): Observable<any> {
    const chartConfig = {
      "chart": {
        "type": "bar", 
        "stacked": true,
        // "title": "Sales by Engine & Certification",
        "xAxis": {
          "title": "Engine Types",
          "categories": ["B6.7", "L9", "X12", "F3.8", "B4.5", "X15", "F2.8", "other", "G12"]
        },
        "yAxis": {
          "title": "Sales (in millions)",
          "labels": {
            "format": "{value}M"
          }
        },
        "series": [
          {
            "name": "TIER 4 FINAL",
            "data": [20, 30, 15, 10, 5, 10, 5, 2, 1],
            "color": "#a6d96a"
          },
          {
            "name": "TIER 3",
            "data": [15, 25, 10, 5, 3, 5, 2, 1, 0],
            "color": "#fdae61"
          },
          {
            "name": "STAGE V",
            "data": [10, 20, 8, 4, 2, 3, 1, 0.5, 0],
            "color": "#fee08b"
          },
          {
            "name": "OTHER",
            "data": [5, 10, 5, 2, 1, 1, 0.5, 0.2, 0],
            "color": "#d73027"
          },
          {
            "name": "EPA21",
            "data": [12, 18, 9, 4, 2, 2, 1, 0.5, 0],
            "color": "#4575b4"
          },
          {
            "name": "EPA21 CANADA",
            "data": [7, 14, 6, 3, 1, 1, 0.5, 0.2, 0],
            "color": "#91bfdb"
          },
          {
            "name": "EPA17",
            "data": [10, 8, 4, 2, 1, 1, 0.5, 0.1, 0],
            "color": "#f46d43"
          }
        ],
        "legend": {
          "enabled": true,
          "position": "top"
        }
      }
    }
    return of(chartConfig);    
    // return this.http.get(this.apiUrl);
  }

}

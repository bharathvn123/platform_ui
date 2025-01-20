import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient(),
//     {
//       provide: NGX_ECHARTS_CONFIG,
//       useValue: {
//         echarts: () => import('echarts'), // Lazy-load echarts
//       },
//     },
//   ] // Add HttpClientModule here
// }).catch(err => console.error(err));
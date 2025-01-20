import { provideRouter, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: '', // Wildcard route for undefined paths
  },
];
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// });

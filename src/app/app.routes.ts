import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: 'wedget',
    component: WidgetComponent,
  },

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: '', // Wildcard route for undefined paths
  },
];
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// });

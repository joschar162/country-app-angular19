import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutsComponent } from './layouts/country-layouts/country-layouts.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutsComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;

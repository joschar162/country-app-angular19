import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutsComponent } from './layouts/country-layouts/country-layouts.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutsComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      //ByCountryPage
      {
        path: 'by-country',
        component: ByCountryPageComponent,
      },
      //ByRegionPage
      {
        path: 'by-region',
        component: ByRegionPageComponent,
      },

      {
        path: 'by/:code',
        component: CountryPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;

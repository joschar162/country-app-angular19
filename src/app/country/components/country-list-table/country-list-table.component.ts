import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list-table',
  imports: [],
  templateUrl: './country-list-table.component.html',
})
export class CountryListTableComponent {
  countryService = inject(CountryService);
}

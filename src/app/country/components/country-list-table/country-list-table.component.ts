import { Component, inject, input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-country.interfaces';
import type { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-list-table',
  imports: [DecimalPipe],
  templateUrl: './country-list-table.component.html',
})
export class CountryListTableComponent {
  // countryService = inject(CountryService);
  countries = input.required<Country[]>();
}

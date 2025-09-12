import { Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListTableComponent } from '../../components/country-list-table/country-list-table.component';
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-country.interfaces';
import { CountryMapper } from '../../mapper/country.mapper';
import type { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryListTableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe((countries) => {
      this.isLoading.set(false);
      this.countries.set(countries);

      console.log(countries);
    });
  }
}

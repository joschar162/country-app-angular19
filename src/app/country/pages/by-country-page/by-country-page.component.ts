import { Component } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListTableComponent } from '../../components/country-list-table/country-list-table.component';

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchInputComponent, CountryListTableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  onSearch(value: string): void {
    console.log(value);
  }
}

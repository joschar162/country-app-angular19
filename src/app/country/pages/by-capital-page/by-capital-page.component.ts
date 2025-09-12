import { Component, inject } from '@angular/core';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input.component';
import { CountryListTableComponent } from '../../components/country-list-table/country-list-table.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryListTableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  onSearch(query: string) {
    this.countryService.searchByCapital(query).subscribe(console.log);
  }
}

import { Component } from '@angular/core';
import { CountryListTableComponent } from '../../components/country-list-table/country-list-table.component';

@Component({
  selector: 'by-region-page',
  imports: [CountryListTableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  onSearch(value: string): void {
    console.log(value);
  }
}

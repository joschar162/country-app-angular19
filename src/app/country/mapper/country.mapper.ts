import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interfaces';

export class CountryMapper {
  //static RestCountry=>Country
  static mapRestCountryToCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flag: country.flags.png,
      flagSvg: country.flags.svg,
      name: country.translations['spa'].official,
      capital: country.capital?.join(', ') || '',
      population: country.population,
    };
  }

  //static RestCountry[]=>Country[]
  static mapRestCountryArrayToCountryArray(
    restCountries: RESTCountry[]
  ): Country[] {
    // otra forma de hacerlo
    //return restCountries.map((country) => this.mapRestCountryToCountry(country));
    return restCountries.map(this.mapRestCountryToCountry); //Equivalente a la linea anterior
  }
}

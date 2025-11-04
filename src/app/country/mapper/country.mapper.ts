import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interfaces';

export class CountryMapper {
  //static RestCountry=>Country
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flags.png,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish name',
      capital: restCountry.capital.join(', '),
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion,
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

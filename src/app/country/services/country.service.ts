import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interfaces';
import { map, Observable, catchError, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map(
        (restCountry) =>
          CountryMapper.mapRestCountryArrayToCountryArray(restCountry) // map(CountryMapper.mapRestCountryArrayToCountryArray) //equivale a la linea siguiente
      ),
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error(`no se pudo  obtener país con ese capital: ${query}`)
        );
      })
    );
  }
}

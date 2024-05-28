import { Component } from '@angular/core';
import { Country } from 'src/app/domain/models/country';
import { CountriesService } from 'src/app/infrastructure/entry-points/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchCountry( term: string ): void {
    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      console.log(countries);
    });
  }
 
}

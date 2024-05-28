import { Component } from '@angular/core';
import { Country } from 'src/app/domain/models/country';
import { CountriesService } from 'src/app/infrastructure/entry-points/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/domain/models/country';
import { CountriesService } from 'src/app/infrastructure/entry-points/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
    // this.isLoading = this.countriesService.cacheStore.byCountry.loading;
  }

  searchCountry( term: string ): void {

    this.isLoading = true;

    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
 
}

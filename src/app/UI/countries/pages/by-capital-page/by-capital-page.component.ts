import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/domain/models/country';
import { CountriesService } from 'src/app/infrastructure/entry-points/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
    // this.isLoading = this.countriesService.cacheStore.byCapital.loading;
  }

  searchByCapital(term: string): void {

    this.isLoading = true;

    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}

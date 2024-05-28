import { Component } from '@angular/core';
import { Country } from 'src/app/domain/models/country';
import { CountriesService } from 'src/app/infrastructure/entry-points/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchRegion(term : string) : void {
    this.countriesService.searchRegion(term)
    .subscribe( region =>{
      this.countries = region;
    });
  }

}

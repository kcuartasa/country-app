import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/infrastructure/entry-points/countries.service';

import { Country } from 'src/app/domain/models/country';
import { Region } from 'src/app/domain/models/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public initialValue: string = '';
  public isLoading: boolean = false;


  constructor(private countriesService: CountriesService) {}
  
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue = this.countriesService.cacheStore.byRegion.region;
    // this.isLoading = this.countriesService.cacheStore.byRegion.loading;
  }

  searchRegion(region : Region) : void {

    this.isLoading = true;

    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
    .subscribe( contries =>{
      this.countries = contries;
    });
  }

}

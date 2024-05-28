import { Component, Input } from '@angular/core';
import { Country } from 'src/app/domain/models/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}

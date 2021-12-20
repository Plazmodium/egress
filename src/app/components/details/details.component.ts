import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRLLaunches } from 'src/app/core/models/rocket-launch-live/launches.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  public data: IRLLaunches | null | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  public fahrenheitToCelsius(fahrenheit: number | undefined): string | undefined {
    console.log(fahrenheit);
    if (fahrenheit === undefined) { return "No Data"; }
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toPrecision(4).toString();
  }

  public milesHourToKilometresHour(mph: number | undefined): string | undefined {
    console.log(mph);
    if (mph === undefined) { return "No Data"; }
    const kph = mph * 1.60934;
    return kph.toPrecision(4).toString();
  }
}

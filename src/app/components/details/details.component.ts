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

  public fahrenheitToCelsius(fahrenheit: number | null | undefined): string {
    if (fahrenheit === null || fahrenheit === undefined) { return "No Data"; }
    const celsius = (fahrenheit - 32) * 5 / 9;
    return this.composeTempMessage(fahrenheit, celsius);
  }

  public milesHourToKilometresHour(mph: number | null | undefined): string {
    if (mph === undefined || mph === null) { return "No Data"; }
    const kph = mph * 1.60934;
    return this.composeWindMessage(mph, kph);
  }

  public checkWeatherCondition(condition: string | null): string{
    return condition === null ? 'No Data' : condition;
  }

  private composeTempMessage(fahrenheit: number, celsius: number): string {
    return `Temp: ${fahrenheit}°F | ${celsius.toPrecision(4)}°C`;
  }

  private composeWindMessage(mph: number, kph: number): string{
    return `Wind: ${mph}mph | ${kph.toPrecision(4)}kph`;
  }
}

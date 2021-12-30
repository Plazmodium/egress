import { Component } from '@angular/core';
import { NetworkCallService } from './core/services/network-call.service';
import { IRLLaunches } from './core/models/rocket-launch-live/launches.model';
import { Observable } from 'rxjs';

//run project - npx ng start (ng CLI locally installed)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to Ingress';
  data$: Observable<IRLLaunches>;

  constructor(private network: NetworkCallService) {
    this.data$ = this.network.get<IRLLaunches>(
      'https://fdo.rocketlaunch.live/json/launches/next/5'//
    );
  }
}

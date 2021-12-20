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
  data?: IRLLaunches

  constructor() {
   }

  ngOnInit(): void {
  }
}

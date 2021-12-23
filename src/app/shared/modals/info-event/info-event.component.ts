import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent {

  public title: string = "";
  public message: string = "";
  public event!: () => void;
}

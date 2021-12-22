import { NgSwitch } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Provider } from 'src/app/core/models/rocket-launch-live/launches.model';

@Component({
  selector: 'app-terminal-line-image',
  templateUrl: './terminal-line-image.component.html',
  styleUrls: ['./terminal-line-image.component.css'],
})
export class TerminalLineImageComponent implements OnInit {
  @Input()
  public provider?: Provider | null;

  public imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    switch (this.provider?.id) {
      case 4:
        this.imageUrl = '../assets/ariane.png';
        break;
      case 135:
        this.imageUrl = '../assets/mitsubishi.png';
        break;
      case 41:
        this.imageUrl = '../assets/china.png';
        break;
      case 104:
        this.imageUrl = '../assets/russia.png';
        break;
      //../assets/nasa-bw-logo-2.png

      default:
        this.imageUrl = '../assets/satellite.png';
        break;
    }
  }
}

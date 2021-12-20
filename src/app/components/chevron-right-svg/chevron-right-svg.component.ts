import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chevron-right-svg',
  templateUrl: './chevron-right-svg.component.html',
  styleUrls: ['./chevron-right-svg.component.css']
})
export class ChevronRightSvgComponent implements OnInit {

  @Input()
  colour?: string;

  constructor() { }

  ngOnInit(): void { }

}

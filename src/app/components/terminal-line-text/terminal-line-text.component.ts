import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-line-text',
  templateUrl: './terminal-line-text.component.html',
  styleUrls: ['./terminal-line-text.component.css']
})
export class TerminalLineTextComponent {

  @Input()
  public text?: string;
  @Input()
  public iconSpacing?: string;
  @Input()
  public iconColour?: string;

}

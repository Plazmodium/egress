import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { InfoEventComponent } from '../../shared/modals/info-event/info-event.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  public onInfo() {
    this.modalService.create(
      InfoEventComponent,
      this.viewContainerRef,
      'What`s this about?',
      'It`s pretty simple. If you are interested in space, rocketry and like to be inspired by human innovation, then you have come to the right place. Stay up-to-date and never miss a launch.'
      + ' Don`t get bogged down with too much info. Just drop in and get the gist of what`s to come next. That`s it.'
      + ' Oh, and watch this space! You never know what might land ...'
    );
  }
}

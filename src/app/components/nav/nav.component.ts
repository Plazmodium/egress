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
      'Info Title',
      'Info Message'
    );
  }
}

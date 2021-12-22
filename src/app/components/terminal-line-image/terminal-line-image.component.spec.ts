import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLineImageComponent } from './terminal-line-image.component';

describe('TerminalLineImageComponent', () => {
  let component: TerminalLineImageComponent;
  let fixture: ComponentFixture<TerminalLineImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalLineImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalLineImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

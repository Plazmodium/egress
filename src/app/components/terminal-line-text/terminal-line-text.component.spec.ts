import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLineTextComponent } from './terminal-line-text.component';

describe('TerminalLineComponent', () => {
  let component: TerminalLineTextComponent;
  let fixture: ComponentFixture<TerminalLineTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalLineTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalLineTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

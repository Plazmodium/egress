import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronRightSvgComponent } from './chevron-right-svg.component';

describe('ChevronRightSvgComponent', () => {
  let component: ChevronRightSvgComponent;
  let fixture: ComponentFixture<ChevronRightSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChevronRightSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChevronRightSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

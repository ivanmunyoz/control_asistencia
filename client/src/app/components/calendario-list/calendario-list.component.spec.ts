import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioListComponent } from './calendario-list.component';

describe('CalendarioListComponent', () => {
  let component: CalendarioListComponent;
  let fixture: ComponentFixture<CalendarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

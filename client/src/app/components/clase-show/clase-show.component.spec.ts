import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseShowComponent } from './clase-show.component';

describe('ClaseShowComponent', () => {
  let component: ClaseShowComponent;
  let fixture: ComponentFixture<ClaseShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

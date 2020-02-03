import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloListComponent } from './ciclo-list.component';

describe('CicloListComponent', () => {
  let component: CicloListComponent;
  let fixture: ComponentFixture<CicloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

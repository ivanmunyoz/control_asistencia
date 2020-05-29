import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoClaseComponent } from './grupo-clase.component';

describe('GrupoClaseComponent', () => {
  let component: GrupoClaseComponent;
  let fixture: ComponentFixture<GrupoClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

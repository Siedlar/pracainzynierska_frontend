import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajCwiczenieComponent } from './dodaj-cwiczenie.component';

describe('DodajCwiczenieComponent', () => {
  let component: DodajCwiczenieComponent;
  let fixture: ComponentFixture<DodajCwiczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajCwiczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajCwiczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

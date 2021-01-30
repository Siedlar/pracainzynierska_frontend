import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajtreningComponent } from './dodajtrening.component';

describe('DodajtreningComponent', () => {
  let component: DodajtreningComponent;
  let fixture: ComponentFixture<DodajtreningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajtreningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajtreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTreningwTrakcieComponent } from './dodaj-treningw-trakcie.component';

describe('DodajTreningwTrakcieComponent', () => {
  let component: DodajTreningwTrakcieComponent;
  let fixture: ComponentFixture<DodajTreningwTrakcieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajTreningwTrakcieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajTreningwTrakcieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

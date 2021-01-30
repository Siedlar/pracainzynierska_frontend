import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajpomiarComponent } from './dodajpomiar.component';

describe('DodajpomiarComponent', () => {
  let component: DodajpomiarComponent;
  let fixture: ComponentFixture<DodajpomiarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajpomiarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajpomiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

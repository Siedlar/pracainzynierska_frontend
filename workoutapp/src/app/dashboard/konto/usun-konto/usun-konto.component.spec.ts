import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsunKontoComponent } from './usun-konto.component';

describe('UsunKontoComponent', () => {
  let component: UsunKontoComponent;
  let fixture: ComponentFixture<UsunKontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsunKontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsunKontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

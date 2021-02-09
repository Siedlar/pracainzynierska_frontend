import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WybierzCwiczenieComponent } from './wybierz-cwiczenie.component';

describe('WybierzCwiczenieComponent', () => {
  let component: WybierzCwiczenieComponent;
  let fixture: ComponentFixture<WybierzCwiczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WybierzCwiczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WybierzCwiczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriatreningowComponent } from './historiatreningow.component';

describe('HistoriatreningowComponent', () => {
  let component: HistoriatreningowComponent;
  let fixture: ComponentFixture<HistoriatreningowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriatreningowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriatreningowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

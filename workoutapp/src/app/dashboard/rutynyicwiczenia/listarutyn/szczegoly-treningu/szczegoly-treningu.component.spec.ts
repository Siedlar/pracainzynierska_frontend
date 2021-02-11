import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyTreninguComponent } from './szczegoly-treningu.component';

describe('SzczegolyTreninguComponent', () => {
  let component: SzczegolyTreninguComponent;
  let fixture: ComponentFixture<SzczegolyTreninguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolyTreninguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolyTreninguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

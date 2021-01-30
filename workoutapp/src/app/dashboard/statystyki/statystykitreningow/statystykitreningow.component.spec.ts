import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatystykitreningowComponent } from './statystykitreningow.component';

describe('StatystykitreningowComponent', () => {
  let component: StatystykitreningowComponent;
  let fixture: ComponentFixture<StatystykitreningowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatystykitreningowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatystykitreningowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

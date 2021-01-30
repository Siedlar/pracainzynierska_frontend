import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlecyComponent } from './plecy.component';

describe('PlecyComponent', () => {
  let component: PlecyComponent;
  let fixture: ComponentFixture<PlecyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlecyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

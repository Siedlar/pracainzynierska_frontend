import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DzialaniaaplikacjiComponent } from './dzialaniaaplikacji.component';

describe('DzialaniaaplikacjiComponent', () => {
  let component: DzialaniaaplikacjiComponent;
  let fixture: ComponentFixture<DzialaniaaplikacjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DzialaniaaplikacjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DzialaniaaplikacjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatystykipomiarowComponent } from './statystykipomiarow.component';

describe('StatystykipomiarowComponent', () => {
  let component: StatystykipomiarowComponent;
  let fixture: ComponentFixture<StatystykipomiarowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatystykipomiarowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatystykipomiarowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

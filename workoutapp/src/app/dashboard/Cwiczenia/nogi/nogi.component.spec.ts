import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NogiComponent } from './nogi.component';

describe('NogiComponent', () => {
  let component: NogiComponent;
  let fixture: ComponentFixture<NogiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NogiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NogiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

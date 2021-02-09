import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LydkaComponent } from './lydka.component';

describe('LydkaComponent', () => {
  let component: LydkaComponent;
  let fixture: ComponentFixture<LydkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LydkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LydkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

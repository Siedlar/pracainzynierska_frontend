import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JakdzialaComponent } from './jakdziala.component';

describe('JakdzialaComponent', () => {
  let component: JakdzialaComponent;
  let fixture: ComponentFixture<JakdzialaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakdzialaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakdzialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

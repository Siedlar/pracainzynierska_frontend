import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrzuchComponent } from './brzuch.component';

describe('BrzuchComponent', () => {
  let component: BrzuchComponent;
  let fixture: ComponentFixture<BrzuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrzuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrzuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

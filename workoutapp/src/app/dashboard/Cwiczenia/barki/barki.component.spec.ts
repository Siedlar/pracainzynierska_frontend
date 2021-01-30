import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkiComponent } from './barki.component';

describe('BarkiComponent', () => {
  let component: BarkiComponent;
  let fixture: ComponentFixture<BarkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

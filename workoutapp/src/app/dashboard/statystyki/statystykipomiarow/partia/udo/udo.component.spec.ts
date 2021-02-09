import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdoComponent } from './udo.component';

describe('UdoComponent', () => {
  let component: UdoComponent;
  let fixture: ComponentFixture<UdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

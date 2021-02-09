import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WybierzCwiczeniewTrakcieComponent } from './wybierz-cwiczeniew-trakcie.component';

describe('WybierzCwiczeniewTrakcieComponent', () => {
  let component: WybierzCwiczeniewTrakcieComponent;
  let fixture: ComponentFixture<WybierzCwiczeniewTrakcieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WybierzCwiczeniewTrakcieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WybierzCwiczeniewTrakcieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

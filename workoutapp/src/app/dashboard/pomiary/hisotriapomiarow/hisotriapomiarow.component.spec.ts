import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisotriapomiarowComponent } from './hisotriapomiarow.component';

describe('HisotriapomiarowComponent', () => {
  let component: HisotriapomiarowComponent;
  let fixture: ComponentFixture<HisotriapomiarowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisotriapomiarowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisotriapomiarowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

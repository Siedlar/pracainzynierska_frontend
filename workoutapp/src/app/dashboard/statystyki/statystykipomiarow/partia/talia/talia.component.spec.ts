import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaliaComponent } from './talia.component';

describe('TaliaComponent', () => {
  let component: TaliaComponent;
  let fixture: ComponentFixture<TaliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

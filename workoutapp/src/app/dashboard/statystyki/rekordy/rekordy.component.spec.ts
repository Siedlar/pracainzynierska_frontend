import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekordyComponent } from './rekordy.component';

describe('RekordyComponent', () => {
  let component: RekordyComponent;
  let fixture: ComponentFixture<RekordyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekordyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekordyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

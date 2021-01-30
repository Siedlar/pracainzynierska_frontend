import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiepamietaszhaslaComponent } from './niepamietaszhasla.component';

describe('NiepamietaszhaslaComponent', () => {
  let component: NiepamietaszhaslaComponent;
  let fixture: ComponentFixture<NiepamietaszhaslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiepamietaszhaslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiepamietaszhaslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

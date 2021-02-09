import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzedramieComponent } from './przedramie.component';

describe('PrzedramieComponent', () => {
  let component: PrzedramieComponent;
  let fixture: ComponentFixture<PrzedramieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzedramieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzedramieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

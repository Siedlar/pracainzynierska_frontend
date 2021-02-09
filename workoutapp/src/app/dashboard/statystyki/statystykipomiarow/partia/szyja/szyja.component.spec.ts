import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzyjaComponent } from './szyja.component';

describe('SzyjaComponent', () => {
  let component: SzyjaComponent;
  let fixture: ComponentFixture<SzyjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzyjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzyjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

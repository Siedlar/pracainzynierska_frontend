import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JednoCwiczenieComponent } from './jedno-cwiczenie.component';

describe('JednoCwiczenieComponent', () => {
  let component: JednoCwiczenieComponent;
  let fixture: ComponentFixture<JednoCwiczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JednoCwiczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JednoCwiczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

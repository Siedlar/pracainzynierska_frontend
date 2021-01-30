import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StworzprzykladowarutyneComponent } from './stworzprzykladowarutyne.component';

describe('StworzprzykladowarutyneComponent', () => {
  let component: StworzprzykladowarutyneComponent;
  let fixture: ComponentFixture<StworzprzykladowarutyneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StworzprzykladowarutyneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StworzprzykladowarutyneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

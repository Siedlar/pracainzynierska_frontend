import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JedenTreningComponent } from './jeden-trening.component';

describe('JedenTreningComponent', () => {
  let component: JedenTreningComponent;
  let fixture: ComponentFixture<JedenTreningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JedenTreningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JedenTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

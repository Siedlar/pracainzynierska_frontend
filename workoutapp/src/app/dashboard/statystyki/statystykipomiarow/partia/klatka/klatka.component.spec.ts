import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlatkaComponent } from './klatka.component';

describe('KlatkaComponent', () => {
  let component: KlatkaComponent;
  let fixture: ComponentFixture<KlatkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlatkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlatkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

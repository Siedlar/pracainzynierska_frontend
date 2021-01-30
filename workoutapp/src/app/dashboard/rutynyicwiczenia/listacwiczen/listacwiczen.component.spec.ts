import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacwiczenComponent } from './listacwiczen.component';

describe('ListacwiczenComponent', () => {
  let component: ListacwiczenComponent;
  let fixture: ComponentFixture<ListacwiczenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacwiczenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacwiczenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

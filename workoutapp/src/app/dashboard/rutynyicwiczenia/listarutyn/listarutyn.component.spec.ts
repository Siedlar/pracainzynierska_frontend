import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarutynComponent } from './listarutyn.component';

describe('ListarutynComponent', () => {
  let component: ListarutynComponent;
  let fixture: ComponentFixture<ListarutynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarutynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarutynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

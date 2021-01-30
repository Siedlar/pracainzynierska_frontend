import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmieninformacjeComponent } from './zmieninformacje.component';

describe('ZmieninformacjeComponent', () => {
  let component: ZmieninformacjeComponent;
  let fixture: ComponentFixture<ZmieninformacjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmieninformacjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmieninformacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

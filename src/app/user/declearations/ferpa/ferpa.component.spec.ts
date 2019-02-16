import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerpaComponent } from './ferpa.component';

describe('FerpaComponent', () => {
  let component: FerpaComponent;
  let fixture: ComponentFixture<FerpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

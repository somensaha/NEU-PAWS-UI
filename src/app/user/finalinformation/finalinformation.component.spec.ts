import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalinformationComponent } from './finalinformation.component';

describe('FinalinformationComponent', () => {
  let component: FinalinformationComponent;
  let fixture: ComponentFixture<FinalinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

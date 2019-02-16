import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclearationsComponent } from './declearations.component';

describe('DeclearationsComponent', () => {
  let component: DeclearationsComponent;
  let fixture: ComponentFixture<DeclearationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclearationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclearationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

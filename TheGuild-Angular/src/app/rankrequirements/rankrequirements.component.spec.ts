import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankrequirementsComponent } from './rankrequirements.component';

describe('RankrequirementsComponent', () => {
  let component: RankrequirementsComponent;
  let fixture: ComponentFixture<RankrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

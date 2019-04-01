import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankrequirementsEditComponent } from './rankrequirements-edit.component';

describe('RankrequirementsEditComponent', () => {
  let component: RankrequirementsEditComponent;
  let fixture: ComponentFixture<RankrequirementsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankrequirementsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankrequirementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

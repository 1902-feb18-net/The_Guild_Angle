import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestinggroupComponent } from './requestinggroup.component';

describe('RequestinggroupComponent', () => {
  let component: RequestinggroupComponent;
  let fixture: ComponentFixture<RequestinggroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestinggroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestinggroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

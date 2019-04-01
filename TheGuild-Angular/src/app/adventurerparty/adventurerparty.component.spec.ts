import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurerpartyComponent } from './adventurerparty.component';

describe('AdventurerpartyComponent', () => {
  let component: AdventurerpartyComponent;
  let fixture: ComponentFixture<AdventurerpartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurerpartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurerpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

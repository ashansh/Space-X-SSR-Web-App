import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantFiltersComponent } from './constant-filters.component';

describe('ConstantFiltersComponent', () => {
  let component: ConstantFiltersComponent;
  let fixture: ComponentFixture<ConstantFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

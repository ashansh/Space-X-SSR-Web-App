import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramsSpaceXComponent } from './launch-programs-space-x.component';

describe('LaunchProgramsSpaceXComponent', () => {
  let component: LaunchProgramsSpaceXComponent;
  let fixture: ComponentFixture<LaunchProgramsSpaceXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchProgramsSpaceXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramsSpaceXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

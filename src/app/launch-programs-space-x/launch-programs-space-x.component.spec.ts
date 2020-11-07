import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpaceXService } from './../space-x.service';
import { ConstantFiltersComponent } from './../constant-filters/constant-filters.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LaunchProgramsSpaceXComponent } from './launch-programs-space-x.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import {delay} from 'rxjs/operators';

describe('LaunchProgramsSpaceXComponent', () => {
  let component: LaunchProgramsSpaceXComponent;
  let fixture: ComponentFixture<LaunchProgramsSpaceXComponent>;
  let service: SpaceXService;
  let apiData: Observable<any>;

  const spaceXApiData = [{
    launch_success: true,
    launch_year: 2007,
    mission_name: 'Demo Sat',
    mission_id: [
      'abc123',
      'xyz456'
    ]
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ LaunchProgramsSpaceXComponent, ConstantFiltersComponent ],
      providers: [SpaceXService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchProgramsSpaceXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(SpaceXService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramsSpaceXComponent);
    component = fixture.componentInstance;
    component.launchDataFilteredArray = spaceXApiData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show data in mission card launch year', () => {
    const launchYearElement = fixture.debugElement.query(By.css('.launch-year'));
    component.ngOnInit();
    component.lauchProgramsData = spaceXApiData;
    expect(launchYearElement).toBe(null);
  });

  it('On init Api Data should be loaded', fakeAsync(() => {
    spyOn(service,'getSpaceXData').and.returnValue(of(apiData).pipe(delay(1)));
    // Trigger ngOnInit()
    fixture.detectChanges();    
    expect(component.lauchProgramsData).toBeUndefined();
    // Simulates the asynchronous passage of time
    tick(1);
    expect(component.lauchProgramsData).toEqual(apiData);
  }));

});

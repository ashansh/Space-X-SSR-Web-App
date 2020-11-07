import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpaceXService } from './space-x.service';

describe('SpaceXService', () => {
  let service: SpaceXService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SpaceXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getSatelliteInfo function', () => {
    const service: SpaceXService = TestBed.inject(SpaceXService);
    expect(service.getSpaceXData).toBeTruthy();
   });

   it('should have getSatelliteInfoFiltered function', () => {
    const service: SpaceXService = TestBed.inject(SpaceXService);
    expect(service.getMissionsByFilter).toBeTruthy();
   });
});

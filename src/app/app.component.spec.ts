import { HttpClientModule } from '@angular/common/http';
import { ConstantFiltersComponent } from './constant-filters/constant-filters.component';
import { SpaceXService } from './space-x.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LaunchProgramsSpaceXComponent } from './launch-programs-space-x/launch-programs-space-x.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [SpaceXService],
      declarations: [
        AppComponent,
        ConstantFiltersComponent,
        LaunchProgramsSpaceXComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Space-X-SSR-Web-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Space-X-SSR-Web-App');
  });
});

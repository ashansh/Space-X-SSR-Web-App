import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-constant-filters',
  templateUrl: './constant-filters.component.html',
  styleUrls: ['./constant-filters.component.scss']
})
export class ConstantFiltersComponent {

  constructor(private router: Router) {}

  @Output() filterEventEmitter = new EventEmitter<any>();

  public yearFilterArray = [2006, 2007, 2008, 2009,2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  public launchAndLandFilters = ['true', 'false'];
  public selectedLaunchFilter: string;
  public selectedLandFilter: string;
  public selectedYear: number;
  private currentRouteFilter = [];
  private paramObject: Object = {}

  applyYearFilter(year) {
    this.filterEventEmitter.emit({key:'launch_year', value:year});
    this.selectedYear = this.selectedYear === year ? null : year;
    if(this.selectedYear) {
      this.routeWithParams('launch_year', year);
    } else {
      this.removeQueryParams('launch_year');
    }
  }

  applyLaunchFilter(launchFilter) {
    this.filterEventEmitter.emit({key: 'launch_success',value:launchFilter}); 
    this.selectedLaunchFilter = this.selectedLaunchFilter === launchFilter ? null : launchFilter;
    if(this.selectedLaunchFilter) {
      this.routeWithParams('launch_success', launchFilter);
    } else {
      this.removeQueryParams('launch_success');
    }
  }
  applyLandFilter(landFilter) {
    this.filterEventEmitter.emit({key:'land_success',value:landFilter}); 
    this.selectedLandFilter = this.selectedLandFilter === landFilter ? null : landFilter;
    if(this.selectedLandFilter) {
      this.routeWithParams('land_success', landFilter);
    } else {
      this.removeQueryParams('land_success');
    }
  }

  resetAllFilters() {
    this.selectedLandFilter = this.selectedLaunchFilter = this.selectedYear = null;
    this.filterEventEmitter.emit({key: 'reset', value: 'reset'});
    this.router.navigate(['/home']);
    this.currentRouteFilter = [];
    this.paramObject = {};
  }

  routeWithParams(filterType, filterValue) {
    if(!this.currentRouteFilter.length) {
      this.currentRouteFilter.push(filterType);
      this.paramObject = Object.assign({[filterType]: filterValue});
    } else {
      if(this.currentRouteFilter.indexOf(filterType) === -1) {
        this.currentRouteFilter.push(filterType);
        this.paramObject[filterType] = filterValue;
      } else {
        this.paramObject[filterType] = filterValue;
      }
    } 
    this.router.navigate(['/filter'], {queryParams: this.paramObject});
  }

  removeQueryParams(filterType) {
    delete this.paramObject[filterType];
    const index = this.currentRouteFilter.indexOf(filterType);
    if (index > -1) {
      this.currentRouteFilter.splice(index, 1);
      if(!this.currentRouteFilter.length) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/filter'], {queryParams: this.paramObject});
      }
    }
  }
}

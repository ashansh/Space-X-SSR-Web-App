import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-constant-filters',
  templateUrl: './constant-filters.component.html',
  styleUrls: ['./constant-filters.component.scss']
})
export class ConstantFiltersComponent {

  @Output() filterEventEmitter = new EventEmitter<any>();

  yearFilterArray = [2006, 2007, 2008, 2009,2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  launchAndLandFilters = ['true', 'false'];
  selectedLaunchFilter: string;
  selectedLandFilter: string;
  selectedYear: number;

  applyYearFilter(year) {
    this.filterEventEmitter.emit({key:'launch_year', value:year});
    this.selectedYear = this.selectedYear === year ? null : year;
  }

  applyLaunchFilter(launchFilter) {
    this.filterEventEmitter.emit({key: 'launch_success',value:launchFilter}); 
    this.selectedLaunchFilter = this.selectedLaunchFilter === launchFilter ? null : launchFilter;
  
  }
  applyLandFilter(landFilter) {
    this.filterEventEmitter.emit({key:'land_success',value:landFilter}); 
    this.selectedLandFilter = this.selectedLandFilter === landFilter ? null : landFilter;
  }

  resetAllFilters() {
    this.selectedLandFilter = this.selectedLaunchFilter = this.selectedYear = null;
    this.filterEventEmitter.emit({key: 'reset', value: 'reset'});
  }
}

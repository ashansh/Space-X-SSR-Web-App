import { SeoService } from './../seo.service';
import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { SpaceXService } from '../space-x.service';
import { takeUntil } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-programs-space-x',
  templateUrl: './launch-programs-space-x.component.html',
  styleUrls: ['./launch-programs-space-x.component.scss']
})
export class LaunchProgramsSpaceXComponent implements OnInit, OnDestroy {

  @ViewChildren('section') sections: QueryList<ElementRef>;
  
  public lauchProgramsData : any;
  public launchDataFilteredArray = [];
  public missionIdNotFoundMessage: string = 'No Mission Id Found';
  private params = [];

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private dataService: SpaceXService, private seo: SeoService, private router: Router) {} 

  ngOnInit() {
    this.router.navigate(['/home']);
    this.seo.generateTags();
    this.dataService.getSpaceXData().pipe(takeUntil(this.destroyed$)).subscribe(missionData => {
      if(missionData) {
        this.lauchProgramsData = missionData;
        this.launchDataFilteredArray = [...this.lauchProgramsData];
      };
    });
  }

  appliedFilter(filter: {key: string; value:string}) {
    if(filter.value !== 'reset') {
      let httpparams: any = new HttpParams();
      if (this.params.length) {
        let flag = false;
        this.params.forEach((element, index) => {
          if (element.key === filter.key) {
            if (element.value === filter.value) {
              this.params.splice(index, 1);
            } else {
              element.value = filter.value;
            }
            flag = true;
          }
        });
        if (!flag) {
          this.params.push(filter);
        }
      } else {
        this.params.push(filter);
      }
      this.params.forEach(element => {
        httpparams = httpparams.append(element.key, element.value);
      });
      this.dataService.getMissionsByFilter(httpparams).subscribe(apiData => {
        if(apiData) {
          this.launchDataFilteredArray = apiData;
        }
      });
    } else {
      this.params = [];
      this.launchDataFilteredArray = [...this.lauchProgramsData];
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

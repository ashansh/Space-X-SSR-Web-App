import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConstantFiltersComponent } from './constant-filters/constant-filters.component';
import { LaunchProgramsSpaceXComponent } from './launch-programs-space-x/launch-programs-space-x.component';
import { LazyImgDirective } from './LazyImageDirective';

@NgModule({
  declarations: [
    AppComponent,
    ConstantFiltersComponent,
    LaunchProgramsSpaceXComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

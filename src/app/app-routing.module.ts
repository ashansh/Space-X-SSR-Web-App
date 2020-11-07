import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchProgramsSpaceXComponent } from './launch-programs-space-x/launch-programs-space-x.component';

export const routes: Routes = [
  {path: 'filter' , component: LaunchProgramsSpaceXComponent},
  {path: 'contact/:id' , component: LaunchProgramsSpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

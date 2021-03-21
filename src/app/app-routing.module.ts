import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactiveGuard } from './can-deactive.guard';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
  { component: Screen1Component, path: 'screen1' },
  { component: Screen2Component, path: 'screen2', canDeactivate: [CanDeactiveGuard] },
  { component: OutdoorComponent, path: 'outdoor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DayComponent } from './Day/day.component';

const routes: Routes = [
{ 
    path: '',
    redirectTo: '/main',
    pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

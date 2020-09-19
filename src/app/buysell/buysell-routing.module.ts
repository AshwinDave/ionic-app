import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuysellPage } from './buysell.page';

const routes: Routes = [
  {
    path: '',
    component: BuysellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuysellPageRoutingModule {}

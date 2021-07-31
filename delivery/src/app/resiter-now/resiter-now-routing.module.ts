import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResiterNowPage } from './resiter-now.page';

const routes: Routes = [
  {
    path: '',
    component: ResiterNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResiterNowPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectClothesPage } from './select-clothes.page';

const routes: Routes = [
  {
    path: '',
    component: SelectClothesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectClothesPageRoutingModule {}

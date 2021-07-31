import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTaskPage } from './select-task.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTaskPageRoutingModule {}

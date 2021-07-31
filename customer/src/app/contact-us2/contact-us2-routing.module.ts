import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUs2Page } from './contact-us2.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUs2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUs2PageRoutingModule {}

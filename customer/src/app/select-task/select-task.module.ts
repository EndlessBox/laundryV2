import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SelectTaskPageRoutingModule } from './select-task-routing.module';

import { SelectTaskPage } from './select-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,        
    SelectTaskPageRoutingModule
  ],
  declarations: [SelectTaskPage]
})
export class SelectTaskPageModule {}

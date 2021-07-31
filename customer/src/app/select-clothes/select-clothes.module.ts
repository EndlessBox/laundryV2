import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SelectClothesPageRoutingModule } from './select-clothes-routing.module';

import { SelectClothesPage } from './select-clothes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    SelectClothesPageRoutingModule
  ],
  declarations: [SelectClothesPage]
})
export class SelectClothesPageModule {}

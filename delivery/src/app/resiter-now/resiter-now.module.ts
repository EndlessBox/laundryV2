import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
 
import { IonicModule } from '@ionic/angular';

import { ResiterNowPageRoutingModule } from './resiter-now-routing.module';

import { ResiterNowPage } from './resiter-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    ResiterNowPageRoutingModule
  ],
  declarations: [ResiterNowPage]
})
export class ResiterNowPageModule {}

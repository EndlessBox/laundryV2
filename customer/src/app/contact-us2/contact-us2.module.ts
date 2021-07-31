import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
   
import { IonicModule } from '@ionic/angular';

import { ContactUs2PageRoutingModule } from './contact-us2-routing.module';

import { ContactUs2Page } from './contact-us2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ContactUs2PageRoutingModule
  ],
  declarations: [ContactUs2Page]
})
export class ContactUs2PageModule {}

import { Component, Inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

 my_orders() {
    this.route.navigate(['./my-orders']);
  }  
 my_profile() {
    this.route.navigate(['./my-profile']);
  } 
 my_address() {
    this.route.navigate(['./my-address']);
  }
 faq() {
    this.route.navigate(['./faq']);
  } 
 contact_us() {
    this.route.navigate(['./contact-us']);
  } 
 terms_conditions() {
    this.route.navigate(['./terms-conditions']); 
  } 
 chat_with_us() {
    this.route.navigate(['./contact-us2']); 
  }
 change_language() {
    this.route.navigate(['./change-language']);
  }
 sign_in() {
    this.navCtrl.navigateRoot(['./sign-in']);
  } 

   developed_by() {
      window.open("https://opuslab.works/", '_system', 'location=no');
    }   
 
  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }
}

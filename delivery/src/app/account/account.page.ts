import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

 contact() {
    this.route.navigate(['./contact-us']);
  } 
 tnc() {
    this.route.navigate(['./terms-conditions']);
  } 
 chooseLanguage() {
    this.route.navigate(['./change-language']);
  } 
 logout() {
    this.navCtrl.navigateRoot(['./sign-in']);
  } 
  buyAppAction() {
    window.open("https://bitly.com/cc2_Grocer", '_system', 'location=no');
  } 
 buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }    
}

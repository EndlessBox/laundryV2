import { Component, Inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router, @Inject(APP_CONFIG) public config: AppConfig, private modalController: ModalController) { }

  ngOnInit() {
  }
 offers() {
    this.navCtrl.navigateRoot(['./tabs/offers']);
  } 
 select_clothes() {
    this.route.navigate(['./select-clothes']);
  } 
 order_info() {
    this.route.navigate(['./order-info']);
  }
 buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }    
}

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
async copyOffer() {
    const toast = await this.toastController.create({
      message: 'Coupon Code Copied',
      duration: 500,
	  position: 'bottom',
	  mode: 'ios', 
    });
    toast.present();
  }

}

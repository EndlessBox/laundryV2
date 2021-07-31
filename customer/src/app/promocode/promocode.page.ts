import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.page.html',
  styleUrls: ['./promocode.page.scss'],
})
export class PromocodePage implements OnInit {

  constructor(private modalController: ModalController, public toastController: ToastController) { }

  ngOnInit() {
  }
    
//  dismiss(){
//   this.modalController.dismiss();
// }
 
async dismiss() {
    this.modalController.dismiss();
    const toast = await this.toastController.create({
      message: 'Please enter a valid promo code',
      duration: 1000,
	  position: 'bottom',
	  mode: 'ios', 
    });
    toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PromocodePage } from '../promocode/promocode.page'; 
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
})
export class ConfirmOrderPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

 payment() {
    this.route.navigate(['./payment']);
  } 


//promocode(){
//    this.modalController.create({component:PromocodePage}).then((modalElement)=>
//    {
//      modalElement.present();
//    }
//    )
//  }     
}

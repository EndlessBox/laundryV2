import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PromocodePage } from '../promocode/promocode.page'; 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }


 select_time() {
    this.route.navigate(['./select-time']);
  } 


promocode(){
    this.modalController.create({component:PromocodePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }  
}

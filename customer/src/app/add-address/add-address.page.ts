import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressTitlePage } from '../address-title/address-title.page'; 
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
 
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


address_title(){
    this.modalController.create({component:AddressTitlePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }  
 
}

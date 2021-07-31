import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resiter-now',
  templateUrl: './resiter-now.page.html',
  styleUrls: ['./resiter-now.page.scss'],
})
export class ResiterNowPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

 tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}

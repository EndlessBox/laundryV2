import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.page.html',
  styleUrls: ['./deliveries.page.scss'],
})
export class DeliveriesPage implements OnInit {
 @ViewChild('slides', { static: true }) slider: IonSlides;
 segment = 0; 
  constructor(private route: Router) { }

  ngOnInit() {
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  } 
orderDetail() {
    this.route.navigate(['./order-info']);
  } 
}

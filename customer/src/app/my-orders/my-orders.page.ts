import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


 order_info() {
    this.route.navigate(['./order-info']);
  }
}

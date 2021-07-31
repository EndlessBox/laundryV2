import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resiter-now',
  templateUrl: './resiter-now.page.html',
  styleUrls: ['./resiter-now.page.scss'],
})
export class ResiterNowPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 verification() {
    this.route.navigate(['./verification']);
  } 
}

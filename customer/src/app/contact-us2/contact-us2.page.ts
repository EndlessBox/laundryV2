import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us2',
  templateUrl: './contact-us2.page.html',
  styleUrls: ['./contact-us2.page.scss'],
})
export class ContactUs2Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 chat() {
    this.route.navigate(['./chat']);
  } 
}

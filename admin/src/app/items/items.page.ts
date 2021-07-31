import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  categories: string = "all_categories";
 
  constructor(private route: Router	) { }

  ngOnInit() {
  }

 additems() {
    this.route.navigate(['./additems']);
  } 
}

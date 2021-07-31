import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.page.html',
  styleUrls: ['./additems.page.scss'],
})
export class AdditemsPage implements OnInit {
 categorie: string = "apparels";
 sub_category: string = "men_wear";
 in_stock: string = "1";
  constructor() { }

  ngOnInit() {
  }

}

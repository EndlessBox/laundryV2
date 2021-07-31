import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.page.html',
  styleUrls: ['./select-task.page.scss'],
})
export class SelectTaskPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
   this.modalController.dismiss();
 }
}

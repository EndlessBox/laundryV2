import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectTaskPage } from '../select-task/select-task.page';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-clothes',
  templateUrl: './select-clothes.page.html',
  styleUrls: ['./select-clothes.page.scss'],
})
export class SelectClothesPage implements OnInit {
 @ViewChild('slides', { static: true }) slider: IonSlides;
 segment = 0; 
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
    
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }    

 select_task(){
    this.modalController.create({component:SelectTaskPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }  
 cart() {
    this.route.navigate(['./cart']);
  }     
    
}

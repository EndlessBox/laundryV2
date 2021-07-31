import { Component, OnInit , ViewChild} from '@angular/core'; 
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
 @ViewChild('slides', { static: true }) slider: IonSlides;
 segment = 0; 
  constructor() { }

  ngOnInit() {
  }
    
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }   
}

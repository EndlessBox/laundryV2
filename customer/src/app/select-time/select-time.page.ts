import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.page.html',
  styleUrls: ['./select-time.page.scss'],
})
export class SelectTimePage implements OnInit {
 tab: string = "Pick_up";    
   faqExpand1: boolean;
   faqExpand2: boolean;
   faqExpand3: boolean;
   faqExpand4: boolean;
   faqExpand5: boolean;
   faqExpand6: boolean;
   faqExpand7: boolean;
   faqExpand8: boolean;
   faqExpand9: boolean;
   faqExpand10: boolean;
  constructor(private route: Router) { }

  ngOnInit() {
  }
    
  reset(){
  this.faqExpand1=false;
  this.faqExpand2=false;
  this.faqExpand3=false;
  this.faqExpand4=false;
  this.faqExpand5=false;
  this.faqExpand6=false;
  this.faqExpand7=false;
  this.faqExpand8=false;
  this.faqExpand9=false;
  this.faqExpand10=false; 
}
faqExpandToggle1() {
  this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }

  faqExpandToggle2() {
  this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }
   faqExpandToggle3() {
  this.reset();
    this.faqExpand3 = !this.faqExpand3;
  } 
  faqExpandToggle4() {
  this.reset();
    this.faqExpand4 = !this.faqExpand4;
  }  
 faqExpandToggle5() {
  this.reset();
    this.faqExpand5 = !this.faqExpand5;
  }  
 faqExpandToggle6() {
  this.reset();
   this.faqExpand6 = !this.faqExpand6;
  }  
 faqExpandToggle7() {
  this.reset();
    this.faqExpand7 = !this.faqExpand7;
  }  
 faqExpandToggle8() {
  this.reset();
    this.faqExpand8 = !this.faqExpand8;
  }  
 faqExpandToggle9() {
  this.reset();
    this.faqExpand9 = !this.faqExpand9;
  }  
 faqExpandToggle10() {
  this.reset();
    this.faqExpand10 = !this.faqExpand10;
  }	
     
 select_address() {
    this.route.navigate(['./select-address']);
  }    
}

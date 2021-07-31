import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResiterNowPage } from './resiter-now.page';

describe('ResiterNowPage', () => {
  let component: ResiterNowPage;
  let fixture: ComponentFixture<ResiterNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiterNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResiterNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactUs2Page } from './contact-us2.page';

describe('ContactUs2Page', () => {
  let component: ContactUs2Page;
  let fixture: ComponentFixture<ContactUs2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUs2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

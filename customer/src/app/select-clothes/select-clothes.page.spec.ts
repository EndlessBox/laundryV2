import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectClothesPage } from './select-clothes.page';

describe('SelectClothesPage', () => {
  let component: SelectClothesPage;
  let fixture: ComponentFixture<SelectClothesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClothesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectClothesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

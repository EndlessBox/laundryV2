import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectTaskPage } from './select-task.page';

describe('SelectTaskPage', () => {
  let component: SelectTaskPage;
  let fixture: ComponentFixture<SelectTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

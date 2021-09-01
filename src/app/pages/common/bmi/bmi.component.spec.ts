import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BMIComponent } from './bmi.component';

describe('BMIComponent', () => {
  let component: BMIComponent;
  let fixture: ComponentFixture<BMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMIComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntraOperativeEventComponent } from './intra-operative-event.component';

describe('IntraOperativeEventComponent', () => {
  let component: IntraOperativeEventComponent;
  let fixture: ComponentFixture<IntraOperativeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntraOperativeEventComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntraOperativeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientSurgeryPage } from './patient-surgery.page';

describe('PatientSurgeryPage', () => {
  let component: PatientSurgeryPage;
  let fixture: ComponentFixture<PatientSurgeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSurgeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientSurgeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientProcedurePage } from './patient-procedure.page';

describe('PatientProcedurePage', () => {
  let component: PatientProcedurePage;
  let fixture: ComponentFixture<PatientProcedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProcedurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

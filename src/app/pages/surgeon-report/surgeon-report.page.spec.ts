import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurgeonReportPage } from './surgeon-report.page';

describe('SurgeonReportPage', () => {
  let component: SurgeonReportPage;
  let fixture: ComponentFixture<SurgeonReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeonReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurgeonReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

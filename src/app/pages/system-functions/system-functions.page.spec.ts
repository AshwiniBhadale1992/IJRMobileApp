import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemFunctionsPage } from './system-functions.page';

describe('SystemFunctionsPage', () => {
  let component: SystemFunctionsPage;
  let fixture: ComponentFixture<SystemFunctionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemFunctionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemFunctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

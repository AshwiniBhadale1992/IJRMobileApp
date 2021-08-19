import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurgeonProfilePage } from './surgeon-profile.page';

describe('SurgeonProfilePage', () => {
  let component: SurgeonProfilePage;
  let fixture: ComponentFixture<SurgeonProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeonProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurgeonProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageSurgeonsPage } from './manage-surgeons.page';

describe('ManageSurgeonsPage', () => {
  let component: ManageSurgeonsPage;
  let fixture: ComponentFixture<ManageSurgeonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSurgeonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageSurgeonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

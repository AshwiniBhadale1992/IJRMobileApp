import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HipPage } from './hip.page';

describe('HipPage', () => {
  let component: HipPage;
  let fixture: ComponentFixture<HipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

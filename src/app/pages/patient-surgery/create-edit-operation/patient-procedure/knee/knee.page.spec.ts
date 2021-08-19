import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KneePage } from './knee.page';

describe('KneePage', () => {
  let component: KneePage;
  let fixture: ComponentFixture<KneePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KneePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

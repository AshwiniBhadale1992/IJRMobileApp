import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateEditOperationPage } from './create-edit-operation.page';

describe('CreateEditOperationPage', () => {
  let component: CreateEditOperationPage;
  let fixture: ComponentFixture<CreateEditOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditOperationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEditOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

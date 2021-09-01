import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchSurgeonsComponent } from './search-surgeons/search-surgeons.component';
import {AddSurgeonsComponent} from './add-surgeons/add-surgeons.component';

@Component({
  selector: 'app-manage-surgeons',
  templateUrl: './manage-surgeons.page.html',
  styleUrls: ['./manage-surgeons.page.scss'],
})
export class ManageSurgeonsPage implements OnInit {
  modelData: any;
  constructor(public modalController: ModalController) {}
  manageSurgeonSegment='1';

  ngOnInit() {
  this.manageSurgeonSegment='1';
  }


  async openSearchSurgeon()
  {
      const modal = await this.modalController.create({
        component: SearchSurgeonsComponent,
        componentProps: {
          'model_title': "Search Surgeon"
        }
      });

      modal.onDidDismiss().then((modelData) => {

        if (modelData !== null) {
          this.modelData = modelData.data;
          console.log('Modal Data : ' + modelData.data);
        }
      });
      return await modal.present();
  }




 async addSurgeon()
  {
    const modal = await this.modalController.create({
      component: AddSurgeonsComponent,
      componentProps: {
        'model_title': "Add Surgeon"
      }
    });

    modal.onDidDismiss().then((modelData) => {
      debugger;
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();

 }


}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HospitalSelectionComponent } from './hospital-selection/hospital-selection.component';

@Component({
  selector: 'app-surgeon-profile',
  templateUrl: './surgeon-profile.page.html',
  styleUrls: ['./surgeon-profile.page.scss'],
})
export class SurgeonProfilePage implements OnInit {


  modelData: any;
  constructor(public modalController: ModalController) {}
  manageSurgeonSegment='1';

  ngOnInit() {
  this.manageSurgeonSegment='1';
  }
  async openSearchSurgeon()
  {
      const modal = await this.modalController.create({
        component: HospitalSelectionComponent,
        componentProps: {
          'model_title': "Search Hospital"
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

}

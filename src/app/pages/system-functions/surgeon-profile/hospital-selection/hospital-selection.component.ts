import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hospital-selection',
  templateUrl: './hospital-selection.component.html',
  styleUrls: ['./hospital-selection.component.scss'],
})
export class HospitalSelectionComponent implements OnInit {

  @Input() model_title: string;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() { }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-surgeons',
  templateUrl: './add-surgeons.component.html',
  styleUrls: ['./add-surgeons.component.scss'],
})
export class AddSurgeonsComponent implements OnInit {
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

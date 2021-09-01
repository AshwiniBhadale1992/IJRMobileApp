import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-surgeons',
  templateUrl: './search-surgeons.component.html',
  styleUrls: ['./search-surgeons.component.scss'],
})
export class SearchSurgeonsComponent implements OnInit {

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

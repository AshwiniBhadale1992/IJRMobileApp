import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { BMICalculation } from '../../../providers/Helpers/BMICalculation';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss'],
})
export class BMIComponent implements OnInit {
  Height;
  Weight;
  @Input() BMI : string; 
  @Output() BMIValue = new EventEmitter<string>();

  constructor(private modalCtrl : ModalController,private BMIProvider : BMICalculation) { }

  submitted : boolean;


  ngOnInit() {
  }

  BMICalculation = new FormGroup({
    Height : new FormControl('',[Validators.required]),
    Weight : new FormControl('',[Validators.required])
  });

  get f(){
    return this.BMICalculation.controls;
  }

  OnSubmit() {
debugger;

    this.submitted = true;

    if (this.BMICalculation.invalid) {
      return;
    }

    this.BMIProvider.Weight = this.BMICalculation.controls.Weight.value;
    this.BMIProvider.Height = this.BMICalculation.controls.Height.value ;
    
    this.BMIProvider.CalculateBMI();

    this.BMI = this.BMIProvider.BMI;
    this.BMIValue.emit(this.BMI);

    const onClosedData: string = "Wrapped Up!";
    this.modalCtrl.dismiss(onClosedData);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }




}

export class BMICalculation 
{
Weight : number;
Height : number;
BMI : any;

CalculateBMI(){
    this.BMI = ((this.Weight / ((this.Height * this.Height) 
    / 10000)).toFixed(2));
    console.log(this.BMI);
}

}
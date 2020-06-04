import { LightningElement, track } from 'lwc';

export default class BmiCalculatorTrackDecoratorSpring20 extends LightningElement {

    @track BmiData = {
        weight : 0,
        height : 0,
        result : 0
    }
    

    weightInKgHandler(event){
        this.BmiData.weight = parseFloat(event.target.value);
    }

    HeightInMeterHandler(event){
        this.BmiData.height = parseFloat(event.target.value);
    }

    calculateBmiHandler(){
        this.BmiData.result = this.BmiData.weight / (this.BmiData.height*this.BmiData.height);
    }

}
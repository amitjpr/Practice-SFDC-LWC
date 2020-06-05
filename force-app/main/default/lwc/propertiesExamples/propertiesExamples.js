import { LightningElement, track } from 'lwc';

export default class PropertiesExamples extends LightningElement {

    @track bmiData = {
        weight : 0,
        height : 0,
        result : 0
    }

    get bmiValue(){
        return `result of bmi calculation is ${this.bmiData.result}`;
    }

}
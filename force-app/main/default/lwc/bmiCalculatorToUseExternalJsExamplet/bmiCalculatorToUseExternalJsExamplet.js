import { LightningElement } from 'lwc';
import {getBMI} from 'c/externalJsCmp';

export default class BmiCalculatorToUseExternalJsExamplet extends LightningElement {
    bmi_title = 'BMI Calculator';

    changePrivatePropertyValueHandler(event){
        this.bmi_title = 'value change';
        console.log('value:'+this.bmi_title);
    }

    weight;
    height;
    result;

    weightInKgHandler(event){
        this.weight = parseFloat(event.target.value);
    }

    HeightInMeterHandler(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBmiHandler(){
        this.result = getBMI(this.weight,this.height);
    }
}
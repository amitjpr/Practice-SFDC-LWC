import { LightningElement } from 'lwc';
import { track } from 'lwc';

export default class ConditionalRendring extends LightningElement {
    @track displayDiv = false;

    showDivHandler(event){
        this.displayDiv = event.target.checked;

    }
}
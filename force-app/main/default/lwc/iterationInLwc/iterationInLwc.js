import { LightningElement } from 'lwc';
import { track } from 'lwc';

export default class IterationInLwc extends LightningElement {

    @track cityList = ['Jaipur', 'Bangluru', 'Delhi', 'Gurgaon']; 

}
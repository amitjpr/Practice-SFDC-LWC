import { LightningElement } from 'lwc';

export default class AccountManagerLDSCmpForms extends LightningElement {

    recordId;
    successHandler(event){
        this.recordId = event.detail.id;
    }
}
import { LightningElement } from 'lwc';

export default class AccountRecordForm extends LightningElement {

    recordId;

    fieldsArray = ['Name','Phone','Website'];

    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}
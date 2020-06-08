import { LightningElement } from 'lwc';

export default class AccountRecordForm3 extends LightningElement {

    recordId;    

    handleSuccess(event){
        this.recordId = event.detail.id;
    }

}
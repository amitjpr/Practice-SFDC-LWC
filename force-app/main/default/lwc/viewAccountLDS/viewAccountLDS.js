import { LightningElement, wire } from 'lwc';

import {getRecord} from 'lightning/uiRecordApi';

const fieldArray = ['Account.Name','Account.Phone','Account.Website'];

export default class ViewAccountLDS extends LightningElement {

    accountId;

    accountIdChangeHandler(event){
        this.accountId = event.target.value;
    }
    
    @wire(getRecord, {recordId : '$accountId', fields : fieldArray})
    accountRecord;

    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }








}
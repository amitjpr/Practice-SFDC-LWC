import { LightningElement } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHN_FIELD from '@salesforce/schema/Account.Phone';
import WEB_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm2 extends LightningElement {
    recordId;

    fieldsArray = [NAME_FIELD,PHN_FIELD,WEB_FIELD];

    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}
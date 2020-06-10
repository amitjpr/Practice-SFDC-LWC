import { LightningElement,api } from 'lwc';

export default class GetObjectNameAndRecordIdFromFramwork extends LightningElement {

    @api recordId;
    @api objectApiName;
}
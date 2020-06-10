import { LightningElement,track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManagerImperatively.getName';

export default class AccountManagerApexImperatively extends LightningElement {
    numberOfRecords;
    @track accounts;

    handleNumberOfAccount(event){
        this.numberOfRecords = event.target.value;
    }

    handleGetAccounts(){
        console.log('buttton clicked');
        getAllAccounts({accLimit : this.numberOfRecords}).then(response => {
            console.log('success'+response);
            this.accounts = response;
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        });
    }

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

}
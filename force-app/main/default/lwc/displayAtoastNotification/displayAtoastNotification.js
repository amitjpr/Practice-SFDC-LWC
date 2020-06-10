import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class DisplayAtoastNotification extends LightningElement {

    handleShowTost(){
        console.log('method called');
        const toastEvent = new ShowToastEvent({
            title : 'Show Toast ',
            message : 'tost message variant info default'
            
        });

        this.dispatchEvent(toastEvent);
    }

    handleShowErrorTost(){
        const toastEvent = new ShowToastEvent({
            title : ' Show Toast ',
            message : 'Show Error Toast Event Example',
            variant : 'error'
        });
        this.dispatchEvent(toastEvent);
    }

    handleShowSuccessTost(){
        const toastEvent = new ShowToastEvent({
            title : ' Show Toast ',
            message : 'Show Error Toast Event Example',
            variant : 'success'
        });
        this.dispatchEvent(toastEvent);
    }

    handleShowWarningTost(){
        const toastEvent = new ShowToastEvent({
            title : ' Show Toast ',
            message : 'Show Error Toast Event Example',
            variant : 'warning'
        });
        this.dispatchEvent(toastEvent);
    }

}
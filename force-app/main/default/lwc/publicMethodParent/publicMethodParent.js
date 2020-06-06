import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value ;

    onInputChangeHandler(event){
        this.value = event.target.value;
    }

    checkboxSelectValueHandler(){
        const childCom = this.template.querySelector('c-public-method-child');
        const returnedMessage = childCom.selectCheckbox(this.value);
        console.log(returnedMessage);
    }
}
import { LightningElement } from 'lwc';
import { track } from 'lwc';

export default class HelloWorldDynamicBinding extends LightningElement {
    @track dynamicGreeting = 'World';

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }
}
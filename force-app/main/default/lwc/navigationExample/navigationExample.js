import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation' ;

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openBlogHandler(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'http://www.sfdclabs.wordpress.com'
            }
        });
    }
}
import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class ChildToParentEventExample extends LightningElement {
    
    @api meetingRoomInfo = {roomName:'A-01',roomCapacity:'12'};

    @wire(CurrentPageReference) pageReference;

    childEventGenerationHandler(){
        console.log('---->button clicked');
        const childButtonClicked = new CustomEvent('childclick',{detail :this.meetingRoomInfo });
        //fire event from child to parent
        this.dispatchEvent(childButtonClicked);

        //fire event from cmp to any cmp like application event in Aura lightning cmp
        fireEvent(this.pageReference,'pubsublwcchildclick',this.meetingRoomInfo);
    }
    
}
import { LightningElement, api } from 'lwc';

export default class ChildToParentEventExample extends LightningElement {
    
    @api meetingRoomInfo = {roomName:'A-01',roomCapacity:'12'};

    childEventGenerationHandler(){
        console.log('---->button clicked');
        const childButtonClicked = new CustomEvent('childclick',{detail :this.meetingRoomInfo });
        this.dispatchEvent(childButtonClicked);
    }
    
}
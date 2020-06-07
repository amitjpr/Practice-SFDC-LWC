import { LightningElement } from 'lwc';

export default class ChildToParentEventExampleParent extends LightningElement {
   
    meetingRoomsInfo = [
        {roomName: 'A-01',roomCapacity:'12'},
        {roomName: 'A-02',roomCapacity:'16'},
        {roomName: 'A-03',roomCapacity:'10'},
        {roomName: 'A-04',roomCapacity:'8'},
        {roomName: 'A-05',roomCapacity:'4'},
        {roomName: 'A-06',roomCapacity:'2'},
        {roomName: 'A-07',roomCapacity:'6'},
        {roomName: 'A-08',roomCapacity:'20'},
        {roomName: 'A-09',roomCapacity:'5'},
        {roomName: 'A-10',roomCapacity:'15'}
    ]

    childClickHandler(event){
        console.log('child button click found');
        const myRoomDetails = event.detail;
        console.log('----->'+myRoomDetails.roomName);
    }
}
import { LightningElement,wire,api } from 'lwc';
import { subscribe, unsubscribe, MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';
// import BOATMC from the message channel
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c';
 import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
//import  LONGITUDE_FIELD from '@salesfroce/schema/Boat__c.Geolocation__Longitude__s';
//import  LATITUDE_FIELD from '@salesfroce/schema/Boat__c.Geolocation__Latitude__s';
// Declare the const LONGITUDE_FIELD for the boat's Longitude__s
const LONGITUDE_FIELD = 'Boat__c.Geolocation__Longitude__s';
// Declare the const LATITUDE_FIELD for the boat's Latitude
const LATITUDE_FIELD ='Boat__c.Geolocation__Latitude__s'; 
// Declare the const BOAT_FIELDS as a list of [LONGITUDE_FIELD, LATITUDE_FIELD];
const BOAT_FIELDS = [LONGITUDE_FIELD, LATITUDE_FIELD] ;

export default class BoatMap extends LightningElement {
  // private
  subscription = null;
  @api boatId; 
  // Getter and Setter to allow for logic to run on recordId change
  // this getter must be public
  @api get recordId() {
    return this.boatId;
  }
   set recordId(value) {
    this.setAttribute('boatId', value);
    this.boatId = value;
  }
  error = undefined;
  mapMarkers = [];
  // Initialize messageContext for Message Service
  // Getting record's location to construct map markers using recordId
  // Wire the getRecord method using ('$boatId')
  @wire(getRecord,{recordId:this.boatId,fields:BOAT_FIELDS})
  wiredRecord({ error, data }) {
    // Error handling
    if (data) {
      this.error = undefined;
      const longitude = data.fields.Geolocation__Longitude__s.value;
      const latitude = data.fields.Geolocation__Latitude__s.value;
      this.updateMap(longitude, latitude);
    } else if (error) {
      this.error = error;
      this.boatId = undefined;
      this.mapMarkers = [];
    }
  }
  @wire(MessageContext)
    messageContext;
    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                BOATMC,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }
    unsubscribeToMessageChannel() {
      unsubscribe(this.subscription);
      this.subscription = null;
  }

  // Runs when component is connected, subscribes to BoatMC
  connectedCallback() {
    // recordId is populated on Record Pages, and this component
    // should not update when this component is on a record page.
    if (this.subscription || this.recordId) {
      return;
    }
     this.subscribeMC;
     }
   
  
  
  subscribeMC() {
    let subscription = subscribe(this.messageContext, BOATMC, (message) => { this.boatId = message.recordId }, { scope: APPLICATION_SCOPE });
        }
  disconnectedCallback() {
    this.unsubscribeToMessageChannel();
  }
  handleMessage(message) {
    this.boatId = message.recordId;
}
  // Creates the map markers array with the current boat's location for the map.
  updateMap(Longitude, Latitude) {
    this.mapMarkers = [Longitude,Latitude];
  }
  // Getter method for displaying the map component, or a helper method.
  get showMap() {
    return this.mapMarkers.length > 0;
  }
}
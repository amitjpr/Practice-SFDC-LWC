import labelDetails from "@salesforce/label/c.Details";
import labelReviews from "@salesforce/label/c.Reviews";
import labelPleaseSelectABoat from "@salesforce/label/c.Please_select_a_boat";
import labelAddReview from "@salesforce/label/c.Add_Review";
import labelFullDetails from "@salesforce/label/c.Full_Details";
import { getRecord } from "lightning/uiRecordApi";
import BOAT_ID_FIELD from "@salesforce/schema/Boat__c.Id";
import BOAT_NAME_FIELD from "@salesforce/schema/Boat__c.Name";
import { LightningElement, wire, api, track } from "lwc";
import BOATMC from "@salesforce/messageChannel/BoatMessageChannel__c";
import {
  APPLICATION_SCOPE,
  subscribe,
  MessageContext,
  unsubscribe
} from "lightning/messageService";
import { getFieldValue } from "lightning/uiRecordApi";
import { NavigationMixin } from "lightning/navigation";
const BOAT_FIELDS = [BOAT_ID_FIELD, BOAT_NAME_FIELD];

export default class BoatDetailTabs extends NavigationMixin(LightningElement) {
  @api boatId;
  @api wiredRecord;
  label = {
    labelDetails,
    labelReviews,
    labelAddReview,
    labelFullDetails,
    labelPleaseSelectABoat
  };
  // Decide when to show or hide the icon
  // returns 'utility:anchor' or null
  get detailsTabIconName() {
    console.log("this.wiredRecord.data" + this.wiredRecord.data);
    return this.wiredRecord && this.wiredRecord.data ? "utility:anchor" : null;
  }
  // Utilize getFieldValue to extract the boat name from the record wire
  @wire(getRecord, { recordId: "$boatId", fields: BOAT_FIELDS })
  wiredRecord;
  @api get boatName() {
    return getFieldValue(this.wiredRecord.data, BOAT_NAME_FIELD);
  }
  // Private
  subscription = null;
  // Initialize messageContext for Message Service
  @wire(MessageContext)
  messageContext;
  // Subscribe to the message channel
  subscribeMC() {
    if (this.subscription) {
      return;
    }
    // local boatId must receive the recordId from the message
    this.subscription = subscribe(
      this.messageContext,
      BOATMC,
      (message) => {
        this.boatId = message.recordId;
      },
      { scope: APPLICATION_SCOPE }
    );
  }
  // Calls subscribeMC()
  connectedCallback() {
    this.subscribeMC();
  }
  // Navigates to record page
  navigateToRecordViewPage() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.boatId,
        actionName: "view"
      }
    });
  }
  // Navigates back to the review list, and refreshes reviews component
  handleReviewCreated() {
    this.template.querySelector("lightning-tabset").activeTabValue = "reviews";
    console.log("handleReviewCreated 1 ");
    this.template.querySelector("c-boat-reviews").refresh();
    console.log("handleReviewCreated 2 ");
  }
} 

import { LightningElement ,track} from 'lwc';

export default class FifthPage extends LightningElement { 
 
    @track meetingvalue = false; 

  // Handle select change event
   handleSelectChange(event) {
        if (event.target.value === 'Meeting') {
            // Show the Meeting template
            this.meetingvalue = true;
        } else {
            // Hide the Meeting template
            this.meetingvalue = false;
        }
    }
    

 

}

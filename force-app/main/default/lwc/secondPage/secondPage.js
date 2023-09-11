import { LightningElement, api, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
// import { NavigationMixin } from 'lightning/navigation';


export default class SecondPage extends  LightningElement {

    @wire(getContacts) contacts;
    @track showsuspectform = false;
    @track filtrtemplate = false;

    
    onnewsuspect() {
      
        this.showsuspectform = true;

        location.reload();


        
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__component',
        //     attributes: {
        //         componentName: 'C__firstPage',
        //     },
        // });

}


    onfiltericonclick(e) {
        this.filtrtemplate = ! this.filtrtemplate;
}

 




    
}
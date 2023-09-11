import { LightningElement ,api ,track,wire} from 'lwc';
// import createContact from '@salesforce/apex/ContactController.createContactRecord';
// import { createRecord } from 'lightning/uiRecordApi';
// import CONTACT_OBJECT from '@salesforce/schema/Contact';
// import { NavigationMixin } from 'lightning/navigation';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createContactRecord from '@salesforce/apex/ContactController.createContactRecord';
export default class FirstPage extends LightningElement {

  
    @api contacts;
  

    @track firstname='';
    @track lastname='';
    @track mobile='';
    @track email='';
    @track department='';
    @track leadsource;
    @track level;

     @track createdContact; // Property to store the created contact data
    @track showrecords = false;

    onfirstnamechange(event){
        this.firstname =event.target.value;
    }

    onlastnamechange(event){
        this.lastname =event.target.value;
    }

    onmobilechange(event){
        this.mobile =event.target.value;
    }

    onemailchange(event){
        this.email =event.target.value;
    }

    ondepartmentchange(event){
        this.department =event.target.value;
    }


    // for lead source

    get Leadsourcesoptions (){
        return[
            {label: 'Web', value: 'Web'},
            {label: 'Phone Inquiry', value: 'Phone Inquiry'},
            {label: 'Partner Referral', value: 'Partner Referral'},
            {label: 'Purchased List', value: 'Purchased List'},
            {label: 'Other', value: 'Other'}]  
    }

    onleadsourcechange(event){
        this.leadsource =event.target.value;
    }

    //for level

    get leveloptions(){
        return[
            {label: 'Secondary', value: 'Secondary'},
            {label: 'Tertiary', value: 'Tertiary'},
            {label: 'Primary', value: 'Primary'}
        ]
    }

    onlevelchange(event){
        this.level =event.target.value;
    }

    

    //----------------------------------------------------------------

    // oncreatebutton(e) {
    //     window.alert('Suspects Created Successfully!');

        
        
    //     const fields = {
    //         FirstName: this.firstname,
    //         LastName: this.lastname,
    //         MobilePhone: this.mobile,
    //         Email: this.email,
    //         Department:this.department,
    //         Level__c: this.level,
    //         LeadSource: this.leadsource
        
    //     };
    //     createRecord({ apiName: CONTACT_OBJECT.objectApiName, fields })
    //     this.clearaallfields();
    //     this.showsuccessmsg =true;
        
    // }

    //----------------------------------------------------------------

    oncreatebutton() {
        
        createContactRecord({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone: this.mobile,
                    mail: this.email,
                    dept:this.department,
                    level: this.level,
                    leadsource: this.leadsource
             })
            .then(result => {
                
                this.clearaallfields();
                // this.createdContact = result;
                // refreshData();
                // location.reload();
                this.showToast();
                refreshData();
                
               
            })
            .catch(error => {
                // Handle error
            });
    }

        refreshData() {
         return refreshApex(this.createdContact);
           }

    

    showToast(event) {
        this.showrecords = true;
       
        const itsatoastmsg = new ShowToastEvent({
            title: 'Success',
            message: 'Contact created successfully',
            variant: 'success'
        });
        this.dispatchEvent(itsatoastmsg);
    }


         // cancel button
    oncancel() {
        this.showrecords = true;

           this.clearaallfields();
         }
   
         
        clearaallfields(){
        this.firstname='';
        this.lastname='';
        this.mobile='';
        this.email='';
        this.department='';
        this.leadsource='';
        this.level='';

        }
    
    refreshData() {

        refreshApex(this.contacts);
    }
}

   
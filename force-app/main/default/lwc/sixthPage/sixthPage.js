import { LightningElement, track } from 'lwc';
import wpicons from '@salesforce/resourceUrl/wpicon';
import uparrowicon from '@salesforce/resourceUrl/uparrowicon';
import cancel from '@salesforce/resourceUrl/cancel';


export default class SixthPage extends LightningElement {

    @track Status = 'Assigned';

    @track name = 'Gaurav Lokhande';
    @track Contact = '+91 9511767637';
    @track email = 'gaurravlokhande@gmail.com';
    @track category = 'Hot';
    @track projectname = 'Shilp Arcadia';
    @track Location = 'Sector 12, Noida, UP, 287299';
    @track budget = '10,00,000';
    @track wpicon;
    @track uniqueleadid = 'HG59600';
    @track empid = 'HG59600H';
    @track campaign = 'KDjfkd';
    @track sourceoflead = 'Online';
    @track icmembername = 'Gaurav Lokhande';
    @track icteamname = 'JDjsdsdd';
    @track virtualno = 'JF66667';
    @track callpulse = 'HFjfkfg';
    @track callfromno = 'JF66667';
    @track audiofileavailable = 'Hfjfkfg';
    @track callstarttime = 'JF6667';
    @track callendtime = 'Hfjfkfg';
    @track sitevisits = '02';
    @track followups = '04';
    @track facetoface = '01';

    @track sortfilter = false;

    @track clickonreject = false;
    crossicon = cancel;
    arrowicon = uparrowicon;
    @track sortfilter = false;

    @track ifintrested = false;

    onclickintrestedbtn(event) {
         this.ifintrested = true;

    }



    sortByOptions = '';

        sortByOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        // Add more sorting options as needed
    ];


    handleSortByChange(event) {
          this.selectedSortBy = event.detail.value;
    }
    

    Reschedulecalll(event) {
        this.sortfilter = true;
    }










       handleSortByChange(event) {
        this.selectedSortBy = event.detail.value;
        // Handle the selected sorting option here
    }
    
    wpicon = wpicons;


     optionscategory = [
    { value: '"new"', label: '"Budget"' },
    { value: 'expired', label: 'Expired' },
];

    
     optionsreason = [
    { value: '"new"', label: '"Low Budget"' },
    { value: 'expired', label: 'Expired' },
];
    
    
    onclickofrejectbtn(event) {
        this.clickonreject = true;
        
    }

    handleCancel(event) {
        this.clickonreject = false;
          this.ifintrested = false;

    }



    @track timeoxex = true;
      @track hours = '';
    @track minutes = '';
    @track amPm = 'AM';
  
     handleHoursChange(event) {
        this.hours = event.target.value;
    }

    handleMinutesChange(event) {
        this.minutes = event.target.value;
    }

    handleAmPmChange(event) {
        this.amPm = event.target.value;
    }
   
}